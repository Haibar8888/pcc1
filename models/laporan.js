const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const itemSchema = mongoose.Schema(
    {
        nama: {
            type: String,
            require: true
        },
        tanggal: {
            type: Date,
        },
        usia: {
            type: Number,
            require: true
        },
        jk: {
            type: String,
            require: true
        },

        akses: {
            type: String,
            require: true,
            default: 'WA'
        },

        asal: {
            type: String,
            require: true
        },

        dokter: {
            type: String,
            require: true
        },

        rujuk: {
            type: String,
            require: true
        },

        news: {
            type: Number
        },

        kebutuhan: {
            type: String
        },

        prioritas: {
            type: String
        },

        klkpn: {
            type: String
        },

        file: {
            type: String
        },

        status: {
            type: String
        },
        timingMasuk: {
            type: String
        },

        timingStatus: {
            type: String
        },

        responTime: {
            type: String
        },

        operator: {
            type: String
        },

        dpjp: {
            type: String
        },

        satgas: {
            type: String
        },

        diagnosa: {
            type: String
        },

        keterangan: {
            type: String
        },
        knsl: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('laporan', itemSchema);
