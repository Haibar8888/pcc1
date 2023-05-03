const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const kategoriSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    itemsId: {
        type: ObjectId,
        ref: 'Items'
    }
});

module.exports = mongoose.model('Kategori', kategoriSchema);
