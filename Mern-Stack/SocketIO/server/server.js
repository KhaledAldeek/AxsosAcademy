const express = require('express');
const {connection} = require("mongoose");
const app = express();

const server = app.listen(8008, () =>
    console.log('The server is all fired up on port 8008')
);

const io = require('socket.io')(server, { cors: true });

io.on(
    "connection", (socket) => {
        socket.on("event_from_client", (date) => {
            socket.broadcast.emit("send_data_to_all_other_clients", date);
            socket.emit("welcome", { msg: "Welcome from server!", id: socket.id });
        })
    }
);
