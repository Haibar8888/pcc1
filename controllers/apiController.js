const Treasure = require('../models/activity')
const Traveler = require('../models/booking')
const Item = require('../models/item')
const Category = require('../models/category')

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select('_id title country price city unit imageId')
        .limit(5)
        .populate({path: 'imageId', select: '_id imageUrl'})
      const treasure = await Treasure.find()
      const traveler = await Traveler.find()
      const city = await Item.find()
      const category = await Category.find()
        .select('_id name')
        .limit(3)
        .populate({
          path: 'itemId',
          select: '_id title country city isPopular imageId',
          perDocumentLimit: 4,
          populate: {
            path: 'imageId',
            select: '_id imageUrl',
            perDocumentLimit: 1,
          },
        })
      console.log(category)
      res.status(200).json({
        category,
        hero: {
          travelers: traveler.length,
          treasures: treasure.length,
          city: city.length,
        },
        mostPicked,
      })
    } catch (error) {
      res.json({
        message: error.message,
      })
    }
  },
}
