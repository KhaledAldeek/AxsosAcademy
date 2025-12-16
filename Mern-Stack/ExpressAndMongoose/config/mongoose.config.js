const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.cykljtf.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// mongodb+srv://Cluster0:<db_password>@cluster0.cykljtf.mongodb.net/?
console.log(`MongoDB Connected at: ${uri}`);
mongoose.connect(uri)

    .then(() => console.log("Established a connection to the database"))

    .catch(err => console.log("Something went wrong when connecting to the database", err));