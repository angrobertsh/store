json.extract! transaction, :id, :item_id, :item_amount, :email, :success
json.total transaction.total_price
json.unit_price transaction.item.price
json.item_name transaction.item.name
