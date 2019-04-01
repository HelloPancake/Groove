class Post < ApplicationRecord 
    validates :user_id, presence: true


    belongs to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User



end

