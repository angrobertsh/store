class Item < ApplicationRecord
  belongs_to :merchant
  has_many :transactions

  validates :name, :merchant_id, :current_amount, presence: true
  validates :active, inclusion: { in: [ true, false ] }

end
