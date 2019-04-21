class Api::FollowsController < ApplicationController

    def create
        follow = Follow.new()
        follow.follower_id = current_user.id
        @post = Post.find(params[:post][:id])
        follow.followee_id = @post.user_id

        if follow.save!
            render "api/posts/show"
        else
            render json: like.errors.full_messages
        end
    end

    def destroy

        follow = Follow.where({follower_id: current_user.id, followee_id: params[:post][:user_id]})[0]
        
        if follow
            @post = Post.find_by(id: params[:post][:id])
            follow.destroy!
            render "api/posts/show"
        else
            render json: ["Could not find follow to delete"], status: 422
        end
        
    end

end