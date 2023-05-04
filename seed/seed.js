var seeder = require('mongoose-seed')
var mongoose = require('mongoose')

// Connect to MongoDB via Mongoose
seeder.connect(
    'mongodb+srv://Haibar:acerram4gb@cluster0.w2t4mut.mongodb.net/db_pcc?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    },
    function() {
        // Load Mongoose models
        seeder.loadModels([
            // './models/Category',
            // './models/Bank',
            // './models/Item',
            // './models/Featured',
            // './models/Activity',
            // './models/Member',
            // './models/Image',
            // './models/Booking',
            './models/Kategori',
            './models/Subkategori',
            './models/Lokasi',
            './models/Items',
            './models/Users',
            './models/laporan',
        ])

        // Clear specified collections
        seeder.clearModels(
            [
                // 'category',
                // 'bank',
                // 'item',
                // 'member',
                // 'activity',
                // 'featured',
                // 'image',
                // 'booking',
                'Kategori',
                'Subkategori',
                'Lokasi',
                'Users',
                'laporan',
            ],
            function() {
                // Callback to populate DB once collections have been cleared
                seeder.populateModels(data, function() {
                    seeder.disconnect()
                })
            }
        )
    }
)

var data = [
    // start category
    // {
    //   model: 'category',
    //   documents: [
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
    //       name: 'Houses with beauty backyard',
    //       itemId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902224')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902225')},
    //       ],
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
    //       name: 'Hotels with large living room',
    //       itemId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902226')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902227')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902228')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902229')},
    //       ],
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
    //       name: 'Apartment with kitchen',
    //       itemId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902230')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902231')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902232')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902233')},
    //       ],
    //     },
    //   ],
    // },
    // end category
    // start item
    // {
    //   model: 'item',
    //   documents: [
    //     // Tabby Town
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //       title: 'Tabby Town',
    //       price: 12,
    //       sumBooking: 1,
    //       country: 'Indonesia',
    //       city: 'Lampung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901111',
    //     },
    //     // Seattle Rain
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //       title: 'Seattle Rain',
    //       price: 20,
    //       sumBooking: 2,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901111',
    //     },

    //     // Wodden Pit
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
    //       title: 'Wodden Pit',
    //       price: 20,
    //       sumBooking: 3,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901111',
    //     },

    //     // Anggana
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
    //       title: 'Anggana',
    //       price: 20,
    //       sumBooking: 4,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901111',
    //     },

    //     // Green Park
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
    //       title: 'Green Park',
    //       price: 20,
    //       sumBooking: 5,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901112',
    //     },

    //     // Podo Wae
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
    //       title: 'Podo Wae',
    //       price: 20,
    //       sumBooking: 6,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901112',
    //     },

    //     // Silver Rain
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
    //       title: 'Silver Rain',
    //       price: 20,
    //       sumBooking: 7,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901112',
    //     },

    //     // Cashville
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
    //       title: 'Cashville',
    //       price: 20,
    //       sumBooking: 8,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901112',
    //     },

    //     // PS Wood
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
    //       title: 'PS Wood',
    //       price: 20,
    //       sumBooking: 9,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901113',
    //     },

    //     // One Five
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
    //       title: 'One Five',
    //       price: 20,
    //       sumBooking: 11,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901113',
    //     },

    //     // Minimal
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
    //       title: 'Minimal',
    //       price: 20,
    //       sumBooking: 13,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33')},
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901113',
    //     },

    //     // Stays Home
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
    //       title: 'Stays Home',
    //       price: 20,
    //       sumBooking: 14,
    //       country: 'Indonesia',
    //       city: 'Bandung',
    //       isPopular: false,
    //       description:
    //         'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    //       unit: 'night',
    //       imageId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35')},
    //         // done
    //       ],
    //       featuredId: [
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07')},
    //         // done
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08')},
    //       ],
    //       activityId: [
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03')},
    //         {_id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04')},
    //       ],
    //       categoryId: '5e96cbe292b97300fc901113',
    //     },
    //   ],
    // },
    // // end item
    // // start image
    // {
    //   model: 'image',
    //   documents: [
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
    //       imageUrl: 'images/image-mostpicked-1-min.jpg',
    //     },
    //     // done
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
    //       imageUrl: 'images/image-mostpicked-2-min.jpg',
    //     },
    //     // done
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
    //       imageUrl: 'images/image-mostpicked-3-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
    //       imageUrl: 'images/image-mostpicked-4-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
    //       imageUrl: 'images/item-1.png',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
    //       imageUrl: 'images/image-mostpicked-5-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
    //       imageUrl: 'images/image-mostpicked-7-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
    //       imageUrl: 'images/image-mostpicked-8-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
    //       imageUrl: 'images/image-mostpicked-9-min.jpg',
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
    //       imageUrl: 'images/image-mostpicked-10-min.jpg',
    //     },
    //     // done
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
    //       imageUrl: 'images/image-mostpicked-11-min.jpg',
    //     },
    //     // done
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
    //       imageUrl: 'images/image-mostpicked-12-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
    //       imageUrl: 'images/image-mostpicked-13-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
    //       imageUrl: 'images/image-mostpicked-14-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
    //       imageUrl: 'images/image-mostpicked-15-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
    //       imageUrl: 'images/image-category-1-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
    //       imageUrl: 'images/image-category-2-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
    //       imageUrl: 'images/image-category-3-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
    //       imageUrl: 'images/image-category-4-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
    //       imageUrl: 'images/image-category-5-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
    //       imageUrl: 'images/image-category-6-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
    //       imageUrl: 'images/image-category-7-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
    //       imageUrl: 'images/image-category-8-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
    //       imageUrl: 'images/image-category-9-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
    //       imageUrl: 'images/image-category-7-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
    //       imageUrl: 'images/image-category-8-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
    //       imageUrl: 'images/image-category-9-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
    //       imageUrl: 'images/image-category-10-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
    //       imageUrl: 'images/image-category-11-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
    //       imageUrl: 'images/image-category-12-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
    //       imageUrl: 'images/image-category-13-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
    //       imageUrl: 'images/image-category-14-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
    //       imageUrl: 'images/image-category-15-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
    //       imageUrl: 'images/image-category-16-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
    //       imageUrl: 'images/image-category-17-min.jpg',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
    //       imageUrl: 'images/image-category-18-min.jpg',
    //     },
    //   ],
    // },
    // // end image
    // // start feature
    // {
    //   model: 'featured',
    //   documents: [
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
    //       nama: 'bedroom',
    //       qty: 2,
    //       imageUrl: 'images/feature-1.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
    //       nama: 'living room',
    //       qty: 23,
    //       imageUrl: 'images/feature-2.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
    //       nama: 'televison',
    //       qty: 12,
    //       imageUrl: 'images/feature-3.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
    //       nama: 'televison',
    //       qty: 5,
    //       imageUrl: 'images/feature-4.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
    //       nama: 'mbp/s',
    //       qty: 5,
    //       imageUrl: 'images/feature-5.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
    //       nama: 'unit ready',
    //       qty: 5,
    //       imageUrl: 'images/feature-6.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
    //       nama: 'refigrator',
    //       qty: 5,
    //       imageUrl: 'images/feature-7.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
    //       nama: 'televion',
    //       qty: 5,
    //       imageUrl: 'images/feature-8.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     // item 2
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
    //       nama: 'bedroom',
    //       qty: 2,
    //       imageUrl: 'images/feature-1.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
    //       nama: 'living room',
    //       qty: 23,
    //       imageUrl: 'images/feature-2.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
    //       nama: 'televison',
    //       qty: 12,
    //       imageUrl: 'images/feature-3.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
    //       nama: 'televison',
    //       qty: 5,
    //       imageUrl: 'images/feature-4.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
    //       nama: 'mbp/s',
    //       qty: 5,
    //       imageUrl: 'images/feature-5.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
    //       nama: 'unit ready',
    //       qty: 5,
    //       imageUrl: 'images/feature-6.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
    //       nama: 'refigrator',
    //       qty: 5,
    //       imageUrl: 'images/feature-7.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       // done
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
    //       nama: 'televion',
    //       qty: 5,
    //       imageUrl: 'images/feature-8.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //   ],
    // },
    // // end feature
    // // start activity
    // {
    //   model: 'activity',
    //   documents: [
    //     // done
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
    //       nama: 'Green Lake',
    //       type: 'Nature',
    //       imageUrl: 'images/activity-1.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
    //       nama: 'Dog Clubs',
    //       type: 'Pool',
    //       imageUrl: 'images/activity-2.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
    //       nama: 'Labour and Wait',
    //       type: 'Shopping',
    //       imageUrl: 'images/activity-3.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
    //       nama: 'Labour and Wait',
    //       type: 'Shopping',
    //       imageUrl: 'images/activity-4.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //     },
    //     // done 2
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
    //       nama: 'Green Lake',
    //       type: 'Nature',
    //       imageUrl: 'images/activity-3.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
    //       nama: 'Dog Clubs',
    //       type: 'Pool',
    //       imageUrl: 'images/activity-2.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
    //       nama: 'Labour and Wait',
    //       type: 'Shopping',
    //       imageUrl: 'images/activity-1.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
    //       nama: 'Labour and Wait',
    //       type: 'Shopping',
    //       imageUrl: 'images/activity-4.png',
    //       itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
    //     },
    //   ],
    // },
    // // end activity

    // // start booking
    // {
    //   model: 'booking',
    //   documents: [
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
    //       bookingStartDate: '12-12-2020',
    //       bookingEndDate: '12-12-2020',
    //       invoice: 1231231,
    //       itemId: {
    //         _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
    //         title: 'Village Angga',
    //         price: 6,
    //         duration: 2,
    //       },
    //       total: 12,
    //       memberId: new mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
    //       bankId: new mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
    //       payments: {
    //         proofPayment: 'images/buktibayar.jpeg',
    //         bankFrom: 'BCA',
    //         status: 'Proses',
    //         accountHolder: 'ang',
    //       },
    //     },
    //   ],
    // },
    // // end booking

    // // member
    // {
    //   model: 'member',
    //   documents: [
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
    //       firstName: 'Elfin',
    //       lastName: 'Sanjaya',
    //       email: 'elfinsanjaya12@gmail.com',
    //       phoneNumber: '082377954008',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
    //       firstName: 'Yein',
    //       lastName: 'Narayana',
    //       email: 'elfinsanjaya1207@gmail.com',
    //       phoneNumber: '082377954008',
    //     },
    //   ],
    // },
    // {
    //   model: 'bank',
    //   documents: [
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
    //       nameBank: 'Mandiri',
    //       nomorRekening: '089898',
    //       name: 'elfin',
    //       imageUrl: 'images/logo bca.png',
    //     },
    //     {
    //       _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
    //       nameBank: 'BCA',
    //       nomorRekening: '878678',
    //       name: 'elfin',
    //       imageUrl: 'images/logo mandiri.png',
    //     },
    //   ],
    // },
    // {
    //     model: 'Kategori',
    //     documents: [
    //         {
    //             _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
    //             name: 'Obat Umum',
    //         },
    //         {
    //             _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
    //             name: 'Obat Keras',
    //         },
    //     ],
    // },
    // {
    //     model: 'Subkategori',
    //     documents: [
    //         {
    //             _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903347'),
    //             name: 'Obat Demam',
    //         },
    //         {
    //             _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903348'),
    //             name: 'Obat Gatal',
    //         },
    //     ],
    // },
    {
        model: 'laporan',
        documents: [
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968191'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968192'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968193'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968194'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968195'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968196'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
            {
                _id: new mongoose.Types.ObjectId('6451ab9d1922a04424968197'),
                akses: 'Wa',
                tanggal: '2023-05-02T17:00:00.000+00:00',
                nama: 'jordi',
                usia: 12,
                asal: 'rs selong',
                dokter: 'ahmad',
                rujuk: 'alasan rujuk',
                news: 7,
                kebutuhan: 'kebutuhan',
                prioritas: 'p1',
                knsl: 'knsl',
                klkp: '12:13',
                status: 'Diterima',
                timingStatus: '12:05',
                operator: 'galuh',
                dpjp: 'dpjp',
                satgas: 'satgas',
                timingMasuk: '12:00',
                responTime: '13:00',
                diagnosa: '<p>keterangan</p>',
                createdAt: '2023-05-03T00:32:29.855+00:00',
                updatedAt: '2023-05-03T02:20:16.596+00:00',
            },
        ],
    },
    {
        model: 'Users',
        documents: [
            {
                _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
                username: 'admin',
                password: '123',
                role: 'admin',
            },
            {
                _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
                username: 'user',
                password: '123',
                role: 'user',
            },
        ],
    },
]
