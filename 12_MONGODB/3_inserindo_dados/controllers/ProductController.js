//models
import Product from '../models/Product';

module.exports = class ProductController {

    static showProducts(req, res) {
        res.render('products/all');
    }

    static createProduct(req, res) {
        res.render('products/create');
    }

    static createProductPost(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        try {
            const product = new Product(name, price, description);
            //agora temos objeto vamos usar o metodo
            product.save();
            res.redirect('/products');
        } 
        catch(err) {
            console.log('Deu erro' + err);
        }
    }
}

