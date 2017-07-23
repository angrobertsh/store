class ItemsController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :edit, :update, :destroy]

  def index
    if current_user.id == item_params[:merchant_id]
      @items = Item.where(merchant_id: item_params[:merchant_id])
    else
      @items = Item.where(merchant_id: item_params[:merchant_id]).where(active: true)
    end
  end

  def show
    @item = Item.find(item_params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save!
      render "api/items/show"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    @item = Item.find(item_params[:id])
    if @item.update(item_params)
      render "api/items/show"
    else
      @errors = @item.errors.full_messages
      render_errors(@errors)
    end
  end

  def edit
    @item = Item.find(item_params[:id])
    render "api/items/show"
  end

  def destroy
    @item = Item.find(item_params[:id])
    @item.destroy
    @items = Item.where(merchant_id: item_params[:merchant_id])
    render "api/items/index"
  end

  private

  def ensure_logged_in
    if current_user.id != item_params.merchant_id
      @errors = ["This is not your store."]
      render "api/shared/error"
    end
  end

  def item_params
    params.require(:items).permit(:id, :merchant_id, :current_amount, :name, :description, :price, :active, :url)
  end

end
