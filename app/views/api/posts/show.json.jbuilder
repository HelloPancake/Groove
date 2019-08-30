
json.post do 
    json.partial! '/api/posts/post', post: @post
end

json.user do
    json.extract! @user, :id, :username

    json.followers do 
        json.array! user.followers.map {|follow| {id: follow.id, follower_id: follow.follower_id, followee_id: follow.followee_id}}
    end
end
