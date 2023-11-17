import express from 'express';
const router = express.Router();

import ProductController from '../controllers/ProductController';

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
// //pegar um produto especificio
//router.get('/:id', ProductController.showOneProduct);
// //editar produto
// router.get('/edit/:id', ProductController.editProduct)
// router.post('/edit', ProductController.editProductPost);
// //deletar produto
// router.post('/delete/:id', ProductController.deleteOneProduct);
// router.get('/', ProductController.showProducts);

module.exports = router;