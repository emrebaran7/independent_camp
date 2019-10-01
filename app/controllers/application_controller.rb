class ApplicationController < ActionController::Base
    # helper_method makes the passed in methods available in views
    helper_method :current_user, :logged_in?

    # CELLL - acronym for auth methods to write in application controller

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        @current_user = nil 
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end