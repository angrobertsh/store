class SessionController < ApplicationController

  def create
    @user = Merchant.find_by_credentials(merchant_params[:email], merchant_params[:password])
    if @user
      login(@user)
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
    params.require[:merchant].permit(:email, :password)
  end

end
