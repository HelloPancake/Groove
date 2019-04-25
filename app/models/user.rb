class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

    # has_many :notes,
    # primary_key: :id,
    # foreign_key: :user_id,
    # class_name: :Notes

    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

    has_many :followers,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

    has_many :followees,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        crypted = BCrypt::Password.new(self.password_digest)
        crypted.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
end