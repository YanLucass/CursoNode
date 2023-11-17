//models
import Product from '../models/Product';

module.exports = class ProductController {

    static async showProducts(req, res) {
        const products = await Product.getProducts();
        res.render('products/all', { products });
    }

    static async showOneProduct(req, res) {
        const id = req.params.id;
        try {
            const product = await Product.getProductById(id);
            console.log(product);
            res.render('products/product', { product });

        } catch(err) {
            console.log(`deu erro ${err}`);
        }
    }  

    static createProduct(req, res) {
        res.render('products/create');
    }

    static createProductPost(req, res) {
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        try {
            const product = new Product(name, image, price, description);
            //agora temos objeto vamos usar o metodo
            product.save();
            res.redirect('/products');
        } 
        catch(err) {
            console.log('Deu erro' + err);
        }
    }

    //EDITAR PRODUTO 
    //para renderizar
    static async editProduct(req, res) {
        const id = req.params.id;
        //vamos pegar o produto
        const product = await Product.getProductById(id);
        res.render('products/edit', { product });
    }

    //DELETAR PRODUTO
    
    static async deleteOneProduct(req, res) {
        const id = req.params.id;
        console.log(id);
        try {
            Product.deleteProduct(id);
            res.redirect('/products');
        } catch(err) {
            console.log(`Deu erro ${err}`);
        }
    }
}

