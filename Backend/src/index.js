const express = require("express");
const app = express();
const cors =require('cors');


require("dotenv").config(); // Ensure .env is loaded
require('./db/index')

app.use(cors());
app.use(express.json());

const ItemsRouter = require('./routers/items.router');  
const dealsRouter = require('./routers/deals.router');




app.get("/", (req, res) => {
    res.send("hello from backend server");
});

app.use('/api/items',ItemsRouter);
app.use('/api/deals',dealsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
