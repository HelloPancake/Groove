json.extract! user, :id, :username


# json.followers do 
#     json.array! user.follows.map {|follow| {id: follow.id, follower_id: follow.follower_id, followee_id: follow.followee_id}}
# end