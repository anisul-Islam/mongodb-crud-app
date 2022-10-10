const express = require("express");
const connectDatabase = require("./config/db");
const productsRouter = require("./routes/products");

const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDatabase();
});

app.get("/", (req, res) => {
  res.send("<h1>welcome to home</h1>");
});
