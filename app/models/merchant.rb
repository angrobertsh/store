class Merchant < ApplicationRecord
  attr_reader :password
  after_initialize :ensure_session_token
  validates :store_name, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :items
  has_many :transactions, :through => :items

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    merchant = Merchant.find_by(email: email)
    if merchant
      if merchant.is_password?(password)
        return merchant
      end
    end
    return nil
  end

end
