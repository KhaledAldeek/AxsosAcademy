const express = require('express');
const {listen} = require("express/lib/application");
const app = express();
const port = 8002;

app.get("/api/user", (req, res) => {
    res.json({ fullName : "KhaledAldeek", id: "409573169"});
})

app.listen(port, () => {
    // console.log("Server started on port " + port);
    console.log(`Server started on port ${port}`);
})