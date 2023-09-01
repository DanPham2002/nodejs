const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Blog_CaNhan');
        console.log("Connect sucessfull !!");

    } catch (error) {
        console.log("Connect unsucessfull !!");
    }
}

module.exports = { connect }