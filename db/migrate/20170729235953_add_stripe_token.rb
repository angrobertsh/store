class AddStripeToken < ActiveRecord::Migration[5.1]
  def change
    add_column :transactions, :stripe_token, :string, null: false
  end
end
