if @user
    json.partial! "api/users/user", user: @user
end

# if @user
#     json.set! "user" do 
#         json.partial! "api/users/user", user: @user
#     end
# end


if @posts
    @posts.each do |post|
        json.posts do
            json.set! post.id do 
                json.partial! '/api/posts/post', post: post
            end
        end 
    end
end