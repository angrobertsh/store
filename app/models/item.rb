class Item < ApplicationRecord
  belongs_to :merchant
  has_many :transactions

  validates :name, :merchant_id, :current_amount, :active, presence: true

end
