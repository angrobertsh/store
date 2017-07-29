class Item < ApplicationRecord
  validates :name, :merchant_id, :current_amount, :price, presence: true
  validates :active, inclusion: { in: [ true, false ] }
  validates :current_amount, :price, numericality: { only_integer: true, greater_than: -1 }

  before_save :deactivate_if_none_left

  belongs_to :merchant
  has_many :transactions

  private

  def deactivate_if_none_left
    if self.current_amount == 0
      self.active = false
    end
  end

end
