const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const pasienSchema = mongoose.Schema({
    nama: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Pasien', pasienSchema);
