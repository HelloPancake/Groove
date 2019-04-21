class Api::LikesController < ApplicationController

    def create
        like = Like.new()
        like.user_id = current_user.id
        @post = Post.find(params[:post_id])
        like.post_id = @post.id

        if like.save!
            render "api/posts/show"
        else
            render json: like.errors.full_messages
        end
    end

    def destroy

        like = Like.where({user_id: current_user.id, post_id: params[:post_id]})[0]
        
        if like
            @post = Post.find_by(id: params[:post_id])
            like.destroy!
            render "api/posts/show"
        else
            render json: ["Could not find like to delete"], status: 422
        end
        
    end

end