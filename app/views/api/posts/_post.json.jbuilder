json.extract! post, :id, :audio_url, :image_url, :user_id, :body, :title, :post_type
if post.media.attached?
    json.media url_for(post.media)
end