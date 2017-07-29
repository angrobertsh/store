class AddLockingColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :lock_version, :integer
  end
end
