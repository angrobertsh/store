class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(merchant)
    @current_user = merchant
    session[:session_token] = merchant.session_token
  end

  def current_user
    token = session[:session_token]
    @current_user ||= Merchant.find_by(session_token: token)
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def render_errors(errors)
    @errors = errors
    render(
      "api/shared/error",
      status: 422
    )
  end

end
