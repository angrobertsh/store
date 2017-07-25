@transactions.each do |transaction|
  if transaction.keys[0] == "errors"
    json.errors @errors
  else
    json.partial! "api/transactions/transaction", transaction: transaction
  end
end
