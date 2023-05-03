const Category = require('../models/category')
const Bank = require('../models/bank')
const Item = require('../models/item')
const Image = require('../models/image')
const fs = require('fs-extra')
const path = require('path')
const Featured = require('../models/featured')
const Activity = require('../models/activity')
const Users = require('../models/Users')
const Booking = require('../models/booking')
const Member = require('../models/member')
const bcrypt = require('bcryptjs')
const Kategori = require('../models/Kategori')
const Subkategori = require('../models/Subkategori')
const Lokasi = require('../models/Lokasi')
const Items = require('../models/Items')
const Stock = require('../models/Stock')
const Laporan = require('../models/laporan')
const { match } = require('assert')
const { startOfDay, endOfDay } = require('date-fns')
module.exports = {
    viewSignIn: (req, res) => {
        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }
        if (req.session.users === null || req.session.users === undefined) {
            res.render('index', {
                alert,
                title: 'Sign In',
            })
        } else {
            res.redirect('/admin/dashboard')
        }
    },

    actionSignIn: async (req, res) => {
        try {
            const { username, password } = req.body
            const users = await Users.findOne({ username: username })
            // const dataPass = await bcrypt.hash(password, 8);
            // console.log(dataPass);
            if (!users) {
                req.flash(
                    'alertMessage',
                    'Username yang anda masukan tidak cocok'
                )
                req.flash('alertStatus', 'danger')
                res.redirect('/admin/signin')
            }
            const ispassword = await bcrypt.compare(password, users.password)
            if (!ispassword) {
                req.flash(
                    'alertMessage',
                    'Password yang anda masukan tidak cocok'
                )
                req.flash('alertStatus', 'danger')
                res.redirect('/admin/signin')
            }
            req.session.users = {
                id: users.id,
                username: users.username,
                role: users.role,
            }
            res.redirect('/admin/dashboard')
        } catch (error) {
            console.log(error)
        }
    },

    actionLogout: (req, res) => {
        req.session.destroy()
        res.redirect('/admin/signin')
    },
    // kategori
    viewKategori: async (req, res) => {
        try {
            const kategori = await Kategori.find().sort({ _id: -1 })
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/kategori/view_kategori', {
                title: 'Kategori',
                alert,
                kategori,
                user: req.session.users,
            })
        } catch (error) {}
    },

    addKategori: async (req, res) => {
        try {
            const { name } = req.body
            await Kategori.create({ name })
            req.flash('alertMessage', 'data kategori berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/kategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admim/kategori')
        }
    },
    editKategori: async (req, res) => {
        try {
            const { id, name } = req.body
            const kategori = await Kategori.findOne({ _id: id })
            kategori.name = name
            await kategori.save()
            req.flash('alertMessage', 'data kategori berhasil diubah')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/kategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/kategori')
        }
    },
    deleteKategori: async (req, res) => {
        try {
            const { id } = req.params
            const kategori = await Kategori.findOne({ _id: id })
            kategori.deleteOne()
            req.flash('alertMessage', 'data kategori berhasil didelete')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/kategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/kategori')
        }
    },
    // end kategori
    // subkategori
    viewSubkategori: async (req, res) => {
        try {
            const subkategori = await Subkategori.find().sort({ _id: -1 })
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/subkategori/view_subkategori', {
                title: 'Subkategori',
                alert,
                subkategori,
                user: req.session.users,
            })
        } catch (error) {}
    },

    addSubkategori: async (req, res) => {
        try {
            const { name } = req.body
            await Subkategori.create({ name })
            req.flash('alertMessage', 'data subkategori berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/subkategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admim/subkategori')
        }
    },
    editSubkategori: async (req, res) => {
        try {
            const { id, name } = req.body
            const subkategori = await Subkategori.findOne({ _id: id })
            subkategori.name = name
            await subkategori.save()
            req.flash('alertMessage', 'data subkategori berhasil diubah')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/subkategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/subkategori')
        }
    },
    deleteSubkategori: async (req, res) => {
        try {
            const { id } = req.params
            const subkategori = await Subkategori.findOne({ _id: id })
            subkategori.deleteOne()
            req.flash('alertMessage', 'data kategori berhasil didelete')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/subkategori')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/subkategori')
        }
    },
    // end subkategori
    // lokasi
    viewLokasi: async (req, res) => {
        try {
            const lokasi = await Lokasi.find().sort({ _id: -1 })
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/lokasi/view_lokasi', {
                title: 'Lokasi',
                alert,
                lokasi,
                user: req.session.users,
            })
        } catch (error) {}
    },

    addLokasi: async (req, res) => {
        try {
            const { name } = req.body
            await Lokasi.create({ name })
            req.flash('alertMessage', 'data Lokasi berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/lokasi')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admim/lokasi')
        }
    },

    editLokasi: async (req, res) => {
        try {
            const { id, name } = req.body
            const lokasi = await Lokasi.findOne({ _id: id })
            lokasi.name = name
            await lokasi.save()
            req.flash('alertMessage', 'data lokasi berhasil diubah')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/lokasi')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/lokasi')
        }
    },
    deleteLokasi: async (req, res) => {
        try {
            const { id } = req.params
            const lokasi = await Lokasi.findOne({ _id: id })
            lokasi.deleteOne()
            req.flash('alertMessage', 'data kategori berhasil didelete')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/lokasi')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/lokasi')
        }
    },
    // end lokasi
    // barang
    viewBarang: async (req, res) => {
        try {
            const items = await Items.find()
                .sort({ _id: -1 })
                .populate({ path: 'kategoriId', select: 'id name' })
                .populate({ path: 'subkategoriId', select: 'id name' })
                .populate({ path: 'lokasiId', select: 'id name' })

            const kategori = await Kategori.find()
            const lokasi = await Lokasi.find()
            const subkategori = await Subkategori.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/barang/view_barang', {
                title: 'Barang',
                alert,
                items,
                kategori,
                subkategori,
                lokasi,
                items,
                user: req.session.users,
            })
        } catch (error) {}
    },

    addBarang: async (req, res) => {
        try {
            const { name, kategoriId, subkategoriId, lokasiId } = req.body
            const kategori = await Kategori.findOne({ _id: kategoriId })
            const subkategori = await Subkategori.findOne({
                _id: subkategoriId,
            })
            const lokasi = await Lokasi.findOne({ _id: lokasiId })
            newBarang = {}
            await Items.create({
                name: name,
                kategoriId: kategori._id,
                subkategoriId: subkategori._id,
                lokasiId: lokasi._id,
            })
            req.flash('alertMessage', 'data barang berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/barang')
        } catch (error) {
            req.flash('alertMessage', 'data berang sudah ada')
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/barang')
        }
    },

    editBarang: async (req, res) => {
        try {
            // const {id} = req.params
            const { id, name, kategoriId, subkategoriId, lokasiId } = req.body
            console.log(
                `${id},${name},${kategoriId},${subkategoriId},${lokasiId},`
            )
            const items = await Items.findOne({ _id: id })
            items.name = name
            items.kategoriId = kategoriId
            items.subkategoriId = subkategoriId
            items.lokasiId = lokasiId
            await items.save()
            req.flash('alertMessage', 'data barang berhasil diubah')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/barang')
        } catch (error) {
            console.log(error.message)
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/barang')
        }
    },
    deleteBarang: async (req, res) => {
        try {
            const { id } = req.params
            const items = await Items.findOne({ _id: id })
            await items.deleteOne()
            req.flash('alertMessage', 'data barang berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/barang')
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/barang')
        }
    },
    // end barang
    // menu
    viewMenu: async (req, res) => {
        try {
            const items = await Items.find()
                .sort({ _id: -1 })
                .populate({ path: 'lokasiId', select: 'id name' })
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/menu/view_menu', {
                title: 'Menu Utama',
                alert,
                items,
            })
        } catch (error) {}
    },
    editMenu: async (req, res) => {
        const { id, input, lokasi, hasil, keterangan, i2, r3 } = req.body
        console.log(hasil)
        try {
            const items = await Items.findOne({ _id: id })
            if (input.length > 0) {
                items.qty = input
                items.lokasi = lokasi
                items.stockAwal.jumlah = input
                await items.save()
            }
            items.qty = hasil
            items.keterangan = keterangan
            items.stockMasuk.jumlah = i2
            items.stockKeluar.jumlah = r3
            items.lokasi = lokasi
            await items.save()
            req.flash('alertMessage', 'data berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/menu')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/menu')
        }
    },
    // end menu
    //  data
    viewData: async (req, res) => {
        try {
            const laporan = await Laporan.find().sort({ _id: -1 })
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/data/view_data', {
                title: 'Data',
                alert,
                laporan,
                user: req.session.users,
            })
        } catch (error) {}
    },
    viewTambah: (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/data/tambah/view_tambah', {
                title: 'Tambah data',
                alert,
                user: req.session.users,
            })
        } catch (error) {
            console.log(error)
        }
    },
    tambahData: async (req, res) => {
        try {
            const {
                tanggal,
                nama,
                usia,
                jk,
                akses,
                asal,
                dokter,
                rujuk,
                news,
                kebutuhan,
                prioritas,
                knsl,
                klkpn,
                status,
                timingStatus,
                operator,
                dpjp,
                satgas,
                timingMasuk,
                responTime,
                diagnosa,
                keterangan,
            } = req.body
            console.log(
                `${tanggal},${nama},${usia},${jk},${akses},${asal},${dokter},${rujuk},${news},${kebutuhan},${prioritas},${knsl},${klkpn},${status},${timingStatus},${operator},${dpjp},${satgas},${timingMasuk},${responTime},${diagnosa},${keterangan},`
            )
            await Laporan.create({
                tanggal,
                nama,
                usia,
                jk,
                akses,
                asal,
                dokter,
                rujuk,
                news,
                kebutuhan,
                prioritas,
                knsl,
                klkpn,
                status,
                timingStatus,
                operator,
                dpjp,
                satgas,
                timingMasuk,
                responTime,
                diagnosa,
                keterangan,
            })
            req.flash('alertMessage', 'data berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/data')
        } catch (error) {
            console.log(error)
        }
    },
    deleteData: async (req, res) => {
        try {
            const { id } = req.params
            const laporan = await Laporan.findOne({ _id: id })
            await laporan.deleteOne()
            req.flash('alertMessage', 'data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/data')
        } catch (error) {
            console.log(error)
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/data')
        }
    },
    detailData: async (req, res) => {
        try {
            const { id } = req.params
            const laporan = await Laporan.findOne({ _id: id })
            res.render('admin/data/detail/view_detail', {
                title: 'Detail Rujukan',
                laporan,
                user: req.session.users,
            })
        } catch (error) {
            console.log(error)
        }
    },
    viewEdit: async (req, res) => {
        try {
            const { id } = req.params
            const laporan = await Laporan.findOne({ _id: id })
            // const alert = {
            //     message: alertMessage,
            //     status: alertStatus
            // };
            res.render('admin/data/edit/view_edit', {
                title: 'Edit data',
                laporan,
                user: req.session.users,
                // alert
            })
        } catch (error) {
            console.log(error)
        }
    },
    editData: async (req, res) => {
        try {
            const { id } = req.params
            const {
                nama,
                tanggal,
                usia,
                jk,
                akses,
                asal,
                dokter,
                rujuk,
                news,
                kebutuhan,
                prioritas,
                knsl,
                klkpn,
                status,
                dpjp,
                satgas,
                timingMasuk,
                responTime,
                timingStatus,
                operator,
                diagnosa,
                keterangan,
            } = req.body
            const laporan = await Laporan.findOne({ _id: id })
            laporan.nama = nama
            laporan.tanggal = tanggal
            ;(laporan.usia = usia),
                (laporan.jk = jk),
                (laporan.akses = akses),
                (laporan.asal = asal),
                (laporan.dokter = dokter),
                (laporan.rujuk = rujuk),
                (laporan.news = news),
                (laporan.kebutuhan = kebutuhan),
                (laporan.prioritas = prioritas),
                (laporan.knsl = knsl),
                (laporan.klkpn = klkpn),
                (laporan.status = status),
                (laporan.dpjp = dpjp),
                (laporan.satgas = satgas),
                (laporan.timingMasuk = timingMasuk),
                (laporan.responTime = responTime),
                (laporan.timingStatus = timingStatus),
                (laporan.operator = operator),
                (laporan.diagnosa = diagnosa),
                (laporan.keterangan = keterangan)

            laporan.save()
            req.flash('alertMessage', 'Data berhasil diedit')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/data')
        } catch (error) {
            console.log(error)
        }
    },
    // end data
    viewUser: async (req, res) => {
        try {
            const user1 = await Users.find().sort({ _id: -1 })

            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/user/view_user', {
                title: 'User',
                alert,
                user1,
                user: req.session.users,
            })
        } catch (error) {}
    },
    addUser: async (req, res) => {
        try {
            const { username, password, role } = req.body
            await Users.create({ username, password, role })
            req.flash('alertMessage', 'data berhasil ditambahka')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/user')
        } catch (error) {
            await Users.create({ username, password, role })
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params
            console.log(id)
            const user = await Users.findOne({ _id: id })
            await user.delete()
            req.flash('alertMessage', 'data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/user')
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
        }
    },
    editUser: async (req, res) => {
        try {
            const { username, password, role, id } = req.body
            const user = await Users.findOne({ _id: id })
            ;(user.username = username),
                (user.password = password),
                (user.role = role),
                user.save()
            req.flash('alertMessage', 'data berhasil diedit')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/user')
        } catch (error) {
            req.flash('alertMessage', error)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/user')
        }
    },
    dataDashboard: async (req, res) => {
        const data = await Laporan.find()
    },
    viewDashboard: async (req, res) => {
        const member = await Member.find()
        const booking = await Booking.find()
        const item = await Item.find()
        const laporan = await Laporan.find()
            .sort({ _id: -1 })
            .limit(5)
        const data = await Laporan.find()
        console.log(data)
        const diterima = await Laporan.find({}, { status: 1 })
        // const start = new Date(2023, 04, 30)
        // const startday = startOfDay(start)
        // const end = new Date(2023, 05, 02)
        // const endday = endOfDay(end)
        const startTanggal = await Laporan.find({
            createdAt: { $gt: new Date('2023,05,01') },
        })
        const fixStartTanggal = startTanggal[0].createdAt
            .toLocaleString()
            .split(' ')[0]
        const slice = []
        slice.push(fixStartTanggal)

        const newDiterima = []
        diterima.map(data => {
            if (data.status === 'Diterima') {
                newDiterima.push(data)
            }
        })
        const diterimaFix = newDiterima.length

        const diterimaPersen = Math.floor((diterimaFix * 100) / diterima.length)

        const newDialihkan = []
        diterima.map(data => {
            if (data.status === 'Dialihkan') {
                newDialihkan.push(data)
            }
        })
        const dialihkan = newDialihkan.length
        const dialihkanPersen = Math.floor((dialihkan * 100) / diterima.length)

        const newDitunda = []
        diterima.map(data => {
            if (data.status === 'Ditunda') {
                newDitunda.push(data)
            }
        })

        const ditunda = newDitunda.length
        const ditundaPersen = Math.floor((ditunda * 100) / diterima.length)
        let totalPersen = Math.floor(
            dialihkanPersen + diterimaPersen + ditundaPersen
        )

        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }
        res.render('admin/dashboard/view_dashboard', {
            title: 'Dashboard',
            alert,
            user: req.session.users,
            member,
            booking,
            item,
            laporan,
            diterimaFix,
            dialihkan,
            ditunda,
            diterimaPersen,
            dialihkanPersen,
            ditundaPersen,
            totalPersen,
            diterima,
            action: 'view',
            fixStartTanggal,
            data,
        })
    },

    viewCategory: async (req, res) => {
        try {
            const category = await Category.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/category/view_category', {
                category,
                alert,
                title: 'Category',
                user: req.session.users,
            })
        } catch (error) {
            res.redirect('/admin/category')
        }
    },

    addCategory: async (req, res) => {
        try {
            const { name } = req.body
            await Category.create({ name })
            req.flash('alertMessage', 'Data berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/category')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category')
        }
    },

    editCategory: async (req, res) => {
        try {
            const { id, name } = req.body
            const category = await Category.findOne({
                _id: id,
            })
            category.name = name
            await category.save()
            req.flash('alertMessage', 'Data berhasil diupdate')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/category')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category')
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params
            const category = await Category.findOne({
                _id: id,
            })
            await category.deleteOne()
            req.flash('alertMessage', 'Data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/category')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category')
        }
    },

    viewBank: async (req, res) => {
        try {
            const bank = await Bank.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/bank/view_bank', {
                title: 'Bank',
                alert,
                bank,
                user: req.session.users,
            })
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            res.redirect('/admin/bank')
        }
    },

    addBank: async (req, res) => {
        const { name, nameBank, nomorRekening } = req.body
        try {
            await Bank.create({
                name,
                nameBank,
                nomorRekening,
                imageUrl: `images/${req.file.filename}`,
            })
            req.flash('alertMessage', 'Data bank telah berhasil ditambahka')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/bank')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/bank')
        }
    },

    editBank: async (req, res) => {
        try {
            const { id, name, nameBank, nomorRekening } = req.body

            const bank = await Bank.findOne({
                _id: id,
            })
            if (req.file == undefined) {
                bank.name = name
                bank.nameBank = nameBank
                bank.nomorRekening = nomorRekening
                await bank.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect('/admin/bank')
            } else {
                await fs.unlink(path.join(`public/${bank.imageUrl}`))
                bank.name = name
                bank.nameBank = nameBank
                bank.nomorRekening = nomorRekening
                bank.imageUrl = `images/${req.file.filename}`
                await bank.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect('/admin/bank')
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/bank')
        }
    },

    deleteBank: async (req, res) => {
        try {
            const { id } = req.params
            const bank = await Bank.findOne({
                _id: id,
            })
            await bank.deleteOne()
            req.flash('alertMessage', 'Data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/bank')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/bank')
        }
    },

    viewItem: async (req, res) => {
        try {
            const item = await Item.find()
                .sort({ _id: -1 })
                .populate({
                    path: 'imageId',
                    select: 'id imageUrl',
                })
                .populate({
                    path: 'categoryId',
                    select: 'id name',
                })
            const category = await Category.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/item/view_item', {
                title: 'Items',
                alert,
                category,
                item,
                action: 'view',
                user: req.session.users,
            })
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },

    addItem: async (req, res) => {
        try {
            const {
                title,
                price,
                categoryId,
                city,
                country,
                description,
            } = req.body
            if (req.files.length > 0) {
                const category = await Category.findOne({
                    _id: categoryId,
                })
                const newItem = {
                    categoryId: category._id,
                    title,
                    price,
                    city,
                    country,
                    description,
                }
                const item = await Item.create(newItem)
                category.itemId.push({
                    _id: item._id,
                })
                await category.save()
                for (let index = 0; index < req.files.length; index++) {
                    const imageSave = await Image.create({
                        imageUrl: `images/${req.files[index].filename}`,
                    })

                    item.imageId.push({
                        _id: imageSave._id,
                    })
                    await item.save()
                }
            }
            req.flash('alertMessage', 'data berhasil ditambahkan')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/item')
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },

    showImageItem: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Item.findOne({
                _id: id,
            }).populate({
                path: 'imageId',
                select: 'id imageUrl',
            })

            const category = await Category.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/item/view_item', {
                title: 'Items | Show image item',
                alert,
                category,
                item,
                action: 'show-image',
                user: req.session.users,
            })
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },

    showEditItem: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Item.findOne({
                _id: id,
            })
                .populate({
                    path: 'imageId',
                    select: 'id imageUrl',
                })
                .populate({
                    path: 'categoryId',
                    select: 'id name',
                })
            const category = await Category.find()
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/item/view_item', {
                title: 'Items | Show edit item',
                alert,
                category,
                item,
                action: 'edit',
            })
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },

    editItem: async (req, res) => {
        try {
            const { id } = req.params

            const {
                title,
                price,
                categoryId,
                city,
                country,
                description,
            } = req.body
            const item = await Item.findOne({
                _id: id,
            })
                .populate({
                    path: 'imageId',
                    select: 'id imageUrl',
                })
                .populate({
                    path: 'categoryId',
                    select: 'id name',
                })
            if (req.files.length > 0) {
                for (let index = 0; index < item.imageId.length; index++) {
                    const imageUpdate = await Image.findOne({
                        _id: item.imageId[index]._id,
                    })
                    await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`))
                    imageUpdate.imageUrl = `images/${req.files[index].filename}`
                    await imageUpdate.save()
                }
                item.title = title
                item.price = price
                item.city = city
                item.country = country
                item.description = description
                item.categoryId = categoryId
                await item.save()
                req.flash('alertMessage', 'data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect('/admin/item')
            } else {
                item.title = title
                item.price = price
                item.city = city
                item.country = country
                item.description = description
                item.categoryId = categoryId
                item.save()
                req.flash('alertMessage', 'data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect('/admin/item')
            }
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },

    deleteItem: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Item.findOne({
                _id: id,
            }).populate('imageId')
            for (let index = 0; index < item.imageId.length; index++) {
                Image.findOne({ _id: item.imageId[index]._id })
                    .then(async image => {
                        await fs.unlink(path.join(`public/${image.imageUrl}`))
                        image.deleteOne()
                    })
                    .catch(error => {
                        req.flash('alertMessage', error.message)
                        req.flash('alertStatus', 'danger')
                        res.redirect('/admin/item')
                    })
            }
            await item.deleteOne()
            req.flash('alertMessage', 'data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect('/admin/item')
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/item')
        }
    },
    viewDetailItem: async (req, res) => {
        const { itemId } = req.params
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            const feature = await Featured.find({
                itemId: itemId,
            })
            const activity = await Activity.find({
                itemId: itemId,
            })

            res.render('admin/item/detail_view/view_detail_item', {
                title: 'Item | Show detail item',
                alert,
                itemId,
                activity,
                feature,
                user: req.session.users,
            })
        } catch (error) {
            req.flash('alertMessage', error.message)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    addFeature: async (req, res) => {
        const { nama, qty, nomorRekening, itemId } = req.body
        try {
            if (!req.file) {
                req.flash('alertMessage', 'Data bank telah berhasil ditambahka')
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            }
            const feature = await Featured.create({
                nama,
                qty,
                nomorRekening,
                itemId,
                imageUrl: `images/${req.file.filename}`,
            })
            const item = await Item.findOne({
                _id: itemId,
            })
            item.featuredId.push({ _id: feature._id })
            await item.save()
            req.flash('alertMessage', 'Data feature telah berhasil ditambahka')
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    editFeature: async (req, res) => {
        const { id, nama, qty, itemId } = req.body
        try {
            const feature = await Featured.findOne({
                _id: id,
            })
            if (req.file == undefined) {
                feature.nama = nama
                feature.qty = qty
                await feature.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            } else {
                await fs.unlink(path.join(`public/${feature.imageUrl}`))
                feature.nama = nama
                feature.qty = qty
                feature.imageUrl = `images/${req.file.filename}`
                await feature.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    deletefeature: async (req, res) => {
        const { id, itemId } = req.params
        try {
            const feature = await Featured.findOne({ _id: id })

            const item = await Item.findOne({
                _id: itemId,
            }).populate('featuredId')
            for (let index = 0; index < item.featuredId.length; index++) {
                if (
                    item.featuredId[index]._id.toString() ===
                    feature._id.toString()
                ) {
                    item.featuredId.pull({
                        _id: feature._id,
                    })
                    await item.save()
                }
            }
            await fs.unlink(path.join(`public/${feature.imageUrl}`))
            await feature.deleteOne()
            req.flash('alertMessage', 'Data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    addActivity: async (req, res) => {
        const { nama, type, itemId } = req.body
        try {
            if (!req.file) {
                req.flash(
                    'alertMessage',
                    'Data Activity telah berhasil ditambahka'
                )
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            }
            const activity = await Activity.create({
                nama,
                itemId,
                type,
                imageUrl: `images/${req.file.filename}`,
            })
            const item = await Item.findOne({
                _id: itemId,
            })
            item.activityId.push({ _id: activity._id })
            await item.save()
            req.flash(
                'alertMessage',
                'Data Acitivity telah berhasil ditambahka'
            )
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    editAcivity: async (req, res) => {
        const { id, nama, type, itemId } = req.body
        try {
            const activity = await Activity.findOne({
                _id: id,
            })
            if (req.file == undefined) {
                activity.nama = nama
                activity.type = type
                await activity.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            } else {
                await fs.unlink(path.join(`public/${activity.imageUrl}`))
                activity.nama = nama
                activity.type = type
                activity.imageUrl = `images/${req.file.filename}`
                await activity.save()
                req.flash('alertMessage', 'Data berhasil diupdate')
                req.flash('alertStatus', 'primary')
                res.redirect(`/admin/item/show-item-detail/${itemId}`)
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}`)
        }
    },

    deleteActivity: async (req, res) => {
        const { id, itemId } = req.params
        try {
            const activity = await Activity.findOne({ _id: id })
            const item = await Item.findOne({
                _id: itemId,
            }).populate('activityId')
            for (let index = 0; index < item.activityId.length; index++) {
                if (
                    item.activityId[index]._id.toString() ===
                    activity._id.toString()
                ) {
                    item.activityId.pull({
                        _id: activity._id,
                    })
                    await item.save()
                }
            }
            await fs.unlink(path.join(`public/${activity.imageUrl}`))
            await activity.deleteOne()
            req.flash('alertMessage', 'Data berhasil dihapus')
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/item/show-item-detail/${itemId}#show-activity`)
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/item/show-item-detail/${itemId}#show-activity`)
        }
    },
    // booking
    viewBooking: async (req, res) => {
        try {
            const booking = await Booking.find()
                .populate('bankId')
                .populate('memberId')
            console.log(booking)
            res.render('admin/booking/view_booking', {
                title: 'Booking',
                booking,
                user: req.session.users,
            })
        } catch (error) {
            res.redirect('/admin.booking')
        }
    },

    showDetailBooking: async (req, res) => {
        const { id } = req.params
        try {
            const booking = await Booking.findOne({ _id: id })
                .populate('bankId')
                .populate('memberId')
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus,
            }
            res.render('admin/booking/show_detail_booking', {
                title: 'Booking || Show detail booking',
                booking,
                user: req.session.users,
                alert,
            })
        } catch (error) {
            res.redirect('/admin.booking')
        }
    },

    actionConfirmation: async (req, res) => {
        try {
            const { id } = req.params
            const booking = await Booking.findOne({ _id: id })
            booking.payments.status = 'Accept'
            booking.save()
            req.flash('alertMessage', 'Success Confirmation pembayaran')
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/booking/${id}`)
        } catch (error) {
            res.redirect(`/admin/booking/${id}`)
        }
    },
    actionReject: async (req, res) => {
        try {
            const { id } = req.params
            const booking = await Booking.findOne({ _id: id })
            booking.payments.status = 'Reject'
            booking.save()
            req.flash('alertMessage', 'Success Reject pembayaran')
            req.flash('alertStatus', 'primary')
            res.redirect(`/admin/booking/${id}`)
        } catch (error) {
            res.redirect(`/admin/booking/${id}`)
        }
    },
    // end booking
    viewTable: (req, res) => {
        res.render('admin/dataTable/view_data_table', {
            title: 'Data Table',
        })
    },
}
