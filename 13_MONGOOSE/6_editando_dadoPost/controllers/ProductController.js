//models
import Product from '../models/Product';

module.exports = class ProductController {

    static async showProducts(req, res) {
        const products = await Product.find().lean();
        res.render('products/all', { products });
    }

    static async showOneProduct(req, res) {
        const id = req.params.id;
        try {
            const product = await Product.findById(id).lean();
            console.log(product);
            res.render('products/product', { product });

        } catch(err) {
            console.log(`deu erro ${err}`);
        }
    }  

    static createProduct(req, res) {
        res.render('products/create');
    }

    static async createProductPost(req, res) {
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        try {
            const product = new Product({name, image, price, description});
            //agora temos objeto vamos usar o metodo
            await product.save();
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
        const product = await Product.findById(id).lean();
        res.render('products/edit', { product });
    }

    static async editProductPost(req, res) {
        const id = req.body.id;
        console.log(id)
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        const product = { name, image, price, description}
        
        await Product.updateOne({_id: id}, product);
        res.redirect('/');
    
}   
    // //DELETAR PRODUTO
    static async deleteProduct(req, res) {
        const id = req.params.id;
        await Product.deleteOne({_id: id});

        res.redirect('/');

    }
}