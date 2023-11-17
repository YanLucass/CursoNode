import express from 'express';
const router = express.Router();

import ProductController from '../controllers/ProductController';

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost)
router.get('/', ProductController.showProducts);

module.exports = router;