//import db
import conn from '../db/conn';

class Product {
    //objeto terá isso, vamos usar essas props no metodos
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    save() {
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        });

        return product;
    }
}

export default Product;