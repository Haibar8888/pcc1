const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        kategoriId: {
            type: ObjectId,
            ref: 'Kategori'
        },
        subkategoriId: {
            type: ObjectId,
            ref: 'Subkategori'
        },
        lokasiId: {
            type: ObjectId,
            ref: 'Lokasi'
        },
        keterangan: {
            type: String
        },
        qty: {
            type: Number,
            require: true
        },
        stockAwal: {
            type: Number
        },
        stockMasuk: {
            jumlah: {
                type: Number
            },
            tanggal_masuk: {
                type: String,
                default: Date.now()
            }
        },
        stockKeluar: {
            jumlah: {
                type: Number
            },
            tanggal_keluar: {
                type: String,
                default: Date.now()
            }
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model('Items', itemSchema);
