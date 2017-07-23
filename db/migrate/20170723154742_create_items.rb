class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :description
      t.integer :current_amount, null: false
      t.integer :price, null: false
      t.boolean :active, null: false
      t.string :url
      t.integer :merchant_id, null: false

      t.timestamps
    end
    add_index :items, :merchant_id
  end
end
