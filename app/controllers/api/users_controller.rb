class Api::UsersController < ApplicationController
    def new 
        render :new
    end

    def cr
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render json: ["User has succesfully logged in!"]
            render "api/users/show"
        else
            render json: @user.errors.full_nessages, status: 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :password, :email, )
    end

end
