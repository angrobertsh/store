class Api::MerchantsController < ApplicationController
  def index
    @merchants = Merchant.all
  end

  def create
    @merchant = Merchant.new(merchant_params)
    if @merchant.save
      login(@merchant)
      render "api/merchants/show"
    else
      @errors = @merchant.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def merchant_params
    params.require(:merchants).permit(:email, :store_name, :password)
  end

end
