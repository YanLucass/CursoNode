import mongoose from 'mongoose';

async function main() {
    await mongoose.connect('mongodb://localhost:27017/testemongoose');
    console.log('Conectamos ao MongoDB com o Mongoose!');
}
//retorna promise
main().catch(err => console.log(err));

export default mongoose;