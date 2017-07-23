class Transaction < ApplicationRecord
  belongs_to :item

  validates :item_id, :email, :item_amount, presence: true

  def total_price
    self.item.price * self.item_amount
  end

end
