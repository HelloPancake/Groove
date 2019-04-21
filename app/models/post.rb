class Post < ApplicationRecord
    has_one_attached :media

    belongs_to :user

    has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Like

end

