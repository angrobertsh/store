class Api::SessionsController < ApplicationController

  def create
    @merchant = Merchant.find_by_credentials(merchant_params[:email], merchant_params[:password])
    if @merchant
      login(@merchant)
      render "api/merchants/show"
    else
      @errors = ["Incorrect name or password."]
      render(
        "api/shared/error",
        status: 401
      )
    end
  end

  def destroy
    if current_user
      logout
    else
      @errors = ["Nobody is logged in!"]
      render(
        "api/shared/error",
        status: 404
      )
    end
  end

  private

  def merchant_params
    params.require(:session).permit(:email, :password)
  end

end
