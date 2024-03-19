const productsController = require('../controllers/productsController')
const router = require('express').Router();

router.post('/addProduct', productsController.addProduct);
router.get('/allProducts', productsController.getAllProduct);
router.get('/published', productsController.getPublishedProducts);
router.get('/:id', productsController.getOneProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
router.get('/getProductReviews/:id', productsController.getProductReviews);

module.exports = router