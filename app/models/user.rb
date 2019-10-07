# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_artist       :boolean          default(FALSE), not null
#  artist_location :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  artist_name     :string
#

class User < ApplicationRecord
    validates :username, :email, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :artist_name, presence: true if :is_artist == true

    attr_reader :password
    
    has_many :albums, 
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'Album'

    has_many :tracks, 
        through: :albums

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end

