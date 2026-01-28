const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();
function connectDb() {
    mongoose.connect("mongodb+srv://yugantsingh9651_db_user:qrdRAVkV7LG8M4tE@cluster0.v7fpl8r.mongodb.net/day-6")
        .then(() => {
            console.log("server is connected to database");
        })
}

connectDb();

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})