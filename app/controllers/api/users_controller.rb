class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        # debugger≤÷
        @post = Post.where(user_id: params[:id])
        @user = User.where(id: params[:id])[0]

        render :show
    end


    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
