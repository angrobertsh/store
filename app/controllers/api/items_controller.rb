class Api::ItemsController < ApplicationController

  before_action :ensure_correct_user, only: [:create, :edit, :update, :destroy]

  # get request for items index doesn't have nested params because of axios limitations
  # index renders for @items instead of individual @item for ducktyping on frontend.
  # Need to think about how pagination would limit it

  def index
    if logged_in?
      if current_user.id.to_s == params[:merchant_id].to_s
        @merchant = Merchant.find(params[:merchant_id])
        @items = Item.where(merchant_id: params[:merchant_id])
        render "api/items/index"
      end
    end
    @merchant = Merchant.find(params[:merchant_id])
    @items = Item.where(merchant_id: params[:merchant_id]).where(active: true)
  end

  def create
    @item = Item.new(new_item_params)
    if @item.save
      @items = Item.where(merchant_id: @item.merchant_id)
      render "api/items/index"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    @item = Item.find(item_params[:id])
    if @item.update(item_params)
      @items = Item.where(merchant_id: @item.merchant_id)
      render "api/items/index"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    @items = Item.where(merchant_id: params[:merchant_id])
    render "api/items/index"
  end

  private

  def ensure_correct_user
    if !logged_in?
      @errors = ["This is not your store."]
      render "api/shared/error"
    end
    @merchant = current_user
    if @merchant.id.to_s != params[:merchant_id].to_s
      @errors = ["This is not your store."]
      render "api/shared/error"
    end
  end

  # Axios is sending back an id with this for some reason so I have to not permit it
  def new_item_params
    params.require(:item).permit(:merchant_id, :current_amount, :name, :description, :price, :active, :url)
  end

  def item_params
    params.require(:item).permit(:id, :merchant_id, :current_amount, :name, :description, :price, :active, :url)
  end

end
