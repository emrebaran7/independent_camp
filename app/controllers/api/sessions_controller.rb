class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        #find user by credentials
        @user = User.find_by_credentials(params[:user][:username], parans[:user][:password])

        if @user.nil?
            render json: ["Invalid crentials"], status: 401
        else
            login(@user)
            render :show
        end
    end

    def destroy
        if current_user == nil
            render json: ["No current user"], status: 404
        end

        logout!

        render json: {}
    end
end
