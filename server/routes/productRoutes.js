const express = require('express');
const { getProducts } = require('../controllers/productController');
const router = express.Router();

router.route('/').get(getProducts);
module.exports = router;

// router.route('/').get((req, res) => {
//   res.send('products');
// });