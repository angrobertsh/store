@merchants.each do |merchant|
  json.partial! "api/merchants/merchant", merchant: merchant
end
