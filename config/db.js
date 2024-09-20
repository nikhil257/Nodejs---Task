const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL);
const conn = mongoose.connection;

conn.on("open", ()=>{
    console.log("Database Connected");
});

conn.on("error", (err)=>{
    console.log("ERROR >>>>", err);
});

module.exports = conn;