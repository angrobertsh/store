# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Merchant.create(email: "john@john.com", password: "password", store_name: "Storestore")
Merchant.create(email: "john2@john.com", password: "password", store_name: "Storestore2")
Merchant.create(email: "john3@john.com", password: "password", store_name: "Storestore3")
Merchant.create(email: "john4@john.com", password: "password", store_name: "Storestore4")
Merchant.create(email: "john5@john.com", password: "password", store_name: "Storestore5")

Item.create(name: "cat", description: "a cat", current_amount: 2, price: 100, active: true, merchant_id: 1, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat2", description: "a cat2", current_amount: 2, price: 102, active: true, merchant_id: 2, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat3", description: "a cat3", current_amount: 5, price: 103, active: true, merchant_id: 3, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat4", description: "a cat4", current_amount: 6, price: 104, active: true, merchant_id: 4, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat5", description: "a cat5", current_amount: 3, price: 105, active: true, merchant_id: 5, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat6", description: "a cat6", current_amount: 1, price: 106, active: true, merchant_id: 1, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat7", description: "a cat7", current_amount: 0, price: 107, active: false, merchant_id: 1, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat8", description: "a cat8", current_amount: 2, price: 108, active: true, merchant_id: 1, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat9", description: "a cat9", current_amount: 2, price: 109, active: true, merchant_id: 2, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat10", description: "a cat10", current_amount: 3, price: 110, active: true, merchant_id: 2, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat11", description: "a cat11", current_amount: 4, price: 111, active: true, merchant_id: 3, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat12", description: "a cat12", current_amount: 5, price: 112, active: true, merchant_id: 4, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")
Item.create(name: "cat13", description: "a cat13", current_amount: 1, price: 113, active: false, merchant_id: 1, url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1501441719/tsibn6v3imztshksbhys.jpg")

Transaction.create(item_id: 1, email: "marge@marge.com", item_amount: 1, success: true, stripe_token: "1")
Transaction.create(item_id: 1, email: "marge2@marge.com", item_amount: 1, success: true, stripe_token: "2")
Transaction.create(item_id: 2, email: "marge@marge.com", item_amount: 5, success: false, stripe_token: "1")
Transaction.create(item_id: 1, email: "marge3@marge.com", item_amount: 2, success: false, stripe_token: "3")
Transaction.create(item_id: 1, email: "marge4@marge.com", item_amount: 4, success: false, stripe_token: "4")
Transaction.create(item_id: 2, email: "marge5@marge.com", item_amount: 3, success: false, stripe_token: "5")
Transaction.create(item_id: 3, email: "marge@marge.com", item_amount: 3, success: true, stripe_token: "1")
Transaction.create(item_id: 4, email: "marge2@marge.com", item_amount: 3, success: true, stripe_token: "2")
Transaction.create(item_id: 4, email: "marge3@marge.com", item_amount: 3, success: true, stripe_token: "3")
Transaction.create(item_id: 5, email: "marge4@marge.com", item_amount: 3, success: true, stripe_token: "4")
Transaction.create(item_id: 6, email: "marge5@marge.com", item_amount: 2, success: false, stripe_token: "-1")
Transaction.create(item_id: 7, email: "marge@marge.com", item_amount: 1, success: false, stripe_token: "-1")
Transaction.create(item_id: 8, email: "marge2@marge.com", item_amount: 1, success: true, stripe_token: "2")
