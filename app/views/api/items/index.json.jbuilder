json.set! "#{@merchant.id}" do
  json.extract! @merchant, :id, :store_name
  json.items @items.each do |item|
    json.partial! "api/items/item", item: item
  end
end
