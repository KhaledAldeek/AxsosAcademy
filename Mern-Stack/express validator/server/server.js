require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db.config");
const personRoutes = require("./routes/person.routes");

const app = express();

app.use(cors(), express.json(), express.urlencoded({extended:true}));

connectDB(process.env.MONGO_URI);

app.use(personRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`)
})
