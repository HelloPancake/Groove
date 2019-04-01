@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :user_id, :body, :audio_url, :image_url
    end
end