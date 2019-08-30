class Api::PostsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @posts = Post.all
    end

    def show
        debugger
        @post = Post.find_by(id: params[:id])
        @user = User.where(id: params[:id])[0]
        render :show
    end

    def create
        @post = Post.new(post_params)

        if params[:post][:media]
            @post.media.attach(params[:post][:media])
        end

        @post.user_id = current_user.id

        if @post.save!
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
       
    end

    def update
        @post = Post.find(params[:id])
    
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end

    end

    def destroy
        @post = Post.find_by(id: params[:id])
        @post.destroy
        @posts = Post.all
        render :index
    end

    private
        def post_params
            params.require(:post).permit(:audio_url, :image_url, :user_id, :body, :title, :post_type)
        end

end