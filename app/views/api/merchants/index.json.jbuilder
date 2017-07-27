@merchants.each do |merchant|
  json.set! "#{merchant.id}" do
    json.partial! "api/merchants/merchant", merchant: merchant
  end
end
