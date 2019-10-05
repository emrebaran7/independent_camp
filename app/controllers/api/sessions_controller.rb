class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user.nil?
            render json: ["Invalid crentials"], status: 401
        else
            login!(@user)
            render "api/users/show"
            # render json: @user
        end
    end

    def show

    end

    def destroy
        if current_user == nil
            render json: ["No current user"], status: 404
        end

        logout!

        render json: {}
    end
end
