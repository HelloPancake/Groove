class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if @user
            login!(@user)
            @posts = []
            render "api/users/show"
        else
            render json: ["Invalid Username or Password"], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            logout!
            @posts = []
            render "api/users/show"
        else
            render json: ["Not Signed In"], status: 404
        end
    end

    
end


