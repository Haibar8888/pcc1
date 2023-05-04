const router = require('express').Router()
const adminController = require('../controllers/adminController')
const { upload, uploadMultiple } = require('../middlewares/multer')
const auth = require('../middlewares/auth')

router.get('/signin', adminController.viewSignIn)
router.post('/signin', adminController.actionSignIn)
router.use(auth)
router.get('/logout', adminController.actionLogout)
router.get('/dashboard', adminController.viewDashboard)
// router.get('/dashboard', adminController.dataDashboard)
// dokter
router.get('/dokter', adminController.viewDokter)
router.post('/dokter', adminController.addDokter)
// end dokter
// kategori
router.get('/kategori', adminController.viewKategori)
router.post('/kategori', adminController.addKategori)
router.put('/kategori', adminController.editKategori)
router.delete('/kategori/:id', adminController.deleteKategori)
// end kategori
//subkategori
router.get('/subkategori', adminController.viewSubkategori)
router.post('/subkategori', adminController.addSubkategori)
router.put('/subkategori', adminController.editSubkategori)
router.delete('/subkategori/:id', adminController.deleteSubkategori)
// end subkategori
// user
router.get('/user', adminController.viewUser)
router.post('/user', adminController.addUser)
router.delete('/user/:id', adminController.deleteUser)
router.put('/user', adminController.editUser)
// end user
// lokasi
router.get('/lokasi', adminController.viewLokasi)
router.post('/lokasi', adminController.addLokasi)
router.put('/lokasi', adminController.editLokasi)
router.delete('/lokasi', adminController.deleteLokasi)
// end lokasi
// barang
router.get('/barang', adminController.viewBarang)
router.post('/barang', adminController.addBarang)
router.put('/barang', adminController.editBarang)
router.delete('/barang/:id', adminController.deleteBarang)
// end barang
// menu
router.get('/menu', adminController.viewMenu)
router.put('/menu', adminController.editMenu)
// end menu
// route Category
router.get('/category', adminController.viewCategory)
router.post('/category', adminController.addCategory)
router.put('/category', adminController.editCategory)
router.delete('/category/:id', adminController.deleteCategory)
// end router category
// router bank
router.get('/bank', adminController.viewBank)
router.post('/bank', upload, adminController.addBank)
router.put('/bank', upload, adminController.editBank)
router.delete('/bank/:id', adminController.deleteBank)
// end router bank
// data
router.get('/data', adminController.viewData)
router.get('/data/add', adminController.viewTambah)
router.post('/data', adminController.tambahData)
router.delete('/data/:id/delete', adminController.deleteData)
router.get('/data/detail/:id', adminController.detailData)
router.get('/data/:id/edit', adminController.viewEdit)
router.put('/data/:id', adminController.editData)
// router item
router.get('/item', adminController.viewItem)
router.post('/item', uploadMultiple, adminController.addItem)
router.get('/item/show-image/:id', adminController.showImageItem)
router.delete('/item/:id/delete', adminController.deleteItem)
router.get('/item/:id', adminController.showEditItem)
router.put('/item/:id', uploadMultiple, adminController.editItem)
// item feature
router.get('/item/show-item-detail/:itemId', adminController.viewDetailItem)
router.post('/item/add/feature', upload, adminController.addFeature)
router.put('/item/edit/feature', upload, adminController.editFeature)
router.delete('/item/:itemId/feature/:id', adminController.deletefeature)
// item activity
router.post('/item/add/activity', upload, adminController.addActivity)
router.put('/item/edit/activity', upload, adminController.editAcivity)
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity)
// end router item
// booking
router.get('/booking', adminController.viewBooking)
router.get('/booking/:id', adminController.showDetailBooking)
router.put('/booking/:id/confirmation', adminController.actionConfirmation)
router.put('/booking/:id/reject', adminController.actionReject)
// end booking
router.get('/table', adminController.viewTable)
module.exports = router
