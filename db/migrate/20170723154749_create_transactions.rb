class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :item_id, null: false
      t.string :email, null: false
      t.integer :item_amount, null: false
      t.boolean :success

      t.timestamps
    end
    add_index :transactions, :item_id
  end
end
