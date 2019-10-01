# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  artist?         :boolean          default(FALSE), not null
#  artist_location :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, :password_digest, :artist?, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :artist_location, presence: true, if :artist?

    attr_reader: :password
    
    # associations

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

    def is_password?password)
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
