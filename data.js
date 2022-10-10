// CRUD
// Create -> insertOne() / insertMany()
// Read -> find() / findOne()
// Update -> update() / updateOne()
// celete -> delete() / deleteOne()

const { db } = require("./models/products");

/*
GET: /api/products -> return all products 
GET: /api/products/:id -> return single product
DELETE: /api/products/:id -> delete the product
PUT: /api/products/:id -> update the product
POST: /api/products/ -> create the product
*/

// 1. connect the databse
// 2. create a schema and model(collecttion/table)
// 3. Create data in the databse
// 4. Read data from the databse
// 5. Update data from the databse
// 6. Delete data from the databse

// create the database -> crated the collection -> create many documents
