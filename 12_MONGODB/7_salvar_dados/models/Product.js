//import db
import conn from '../db/conn';
import { ObjectId } from 'mongodb';

class Product {
    //objeto terá isso, vamos usar essas props no metodos
    constructor(name, image, price, description) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    save() {
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        });

        return product;
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray();
        return products;
    }

    static async getProductById(id) {
        //transformando o id que veio do argumento no objetoId do mongo
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id)});
        console.log('async');
        return product;
    }

    updateProduct(id) {
        conn.db().collection('products').updateOne({_id: new ObjectId(id)}, {$set: this});
        return;
    }
    static async deleteProduct(id) {
        await conn.db().collection('products').deleteOne({_id: new ObjectId(id)});
        return;
        
    }

}

export default Product;