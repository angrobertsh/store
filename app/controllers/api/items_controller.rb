class Api::ItemsController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :edit, :update, :destroy]

  # get request for items index doesn't have nested params because of axios limitations

  def index
    if logged_in?
      if current_user.id == params[:merchant_id]
        @merchant = Merchant.find(params[:merchant_id])
        @items = Item.where(merchant_id: params[:merchant_id])
        render "api/items/index"
      end
    end
    @merchant = Merchant.find(params[:merchant_id])
    @items = Item.where(merchant_id: params[:merchant_id]).where(active: true)
  end

  def create
    @item = Item.new(item_params)
    if @item.save!
      @items = [@item]
      render "api/items/index"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    @item = Item.find(item_params[:id])
    if @item.update(item_params)
      @items = [@item]
      render "api/items/index"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def edit
    @item = Item.find(item_params[:id])
    @items = [@item]
    render "api/items/index"
  end

  def destroy
    @item = Item.find(item_params[:id])
    @item.destroy
    @items = Item.where(merchant_id: item_params[:merchant_id])
    render "api/items/index"
  end

  private

  def ensure_logged_in
    if !logged_in
      @errors = ["This is not your store."]
      render "api/shared/error"
    end
    @merchant = current_user
    if current_user.id != item_params.merchant_id
      @errors = ["This is not your store."]
      render "api/shared/error"
    end
  end

  def item_params
    params.require(:items).permit(:id, :merchant_id, :current_amount, :name, :description, :price, :active, :url)
  end

end
