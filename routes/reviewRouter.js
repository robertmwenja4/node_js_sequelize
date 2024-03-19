const router = require('express').Router();
const reviewRoute = require('../controllers/reviewsController.js')


router.post('/addReview', reviewRoute.addReview);
router.get('/allReviews', reviewRoute.getAllReviews);

module.exports = router;