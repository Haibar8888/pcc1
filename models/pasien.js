const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const pasienSchema = mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    usia: {
        type: Number,
        require: true
    },
    jk: {
        type: String,
        default: ''
    },
    aksesScrening: {
        type: String,
        default: 'WA'
    }
});

module.exports = mongoose.model('Pasien', pasienSchema);
