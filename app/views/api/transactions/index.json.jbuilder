json.array! (@transactions) do |transaction|
  if transaction[:errors].class == Array
    json.errors transaction[:errors]
    json.item_name transaction[:item_name]
    json.item_amount transaction[:item_amount]
  else
    json.partial! "api/transactions/transaction", transaction: transaction
  end
end
