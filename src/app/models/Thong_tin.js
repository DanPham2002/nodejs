const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Thong_tin = new Schema({
    name: { type: String, default: "Dan" },
    age: { type: Number },
    phone: { type: Number },
    timeNow: { type: Date, default: Date.now },
    timeUp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Thong_tin', Thong_tin);