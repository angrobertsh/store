class Transaction < ApplicationRecord
  belongs_to :item

  validates :item_id, :email, :item_amount, :stripe_token, presence: true
  validates :item_amount, numericality: { only_integer: true, greater_than: 0 }

  def total_price
    self.item.price * self.item_amount
  end

end
