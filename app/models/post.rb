class Post < ApplicationRecord
    has_one_attached :media

    belongs_to :user

end

