import mongoose from "../db/conn";
const { Schema } = mongoose;

const User = mongoose.model(
    'User', //name from model/table/collection
    new Schema(
        {

        name: {
            type: String, required: true
        },
        email: {
            type: String, required: true
        },

        password: {
            type: String, required: true
        },

        image: {
            type: String //salvamos o caminho dela no bd
        },

        phone: {
            type: String, required: true
        },

    },
        { timestamps: true}, // cria createDate, updateDate
    
    )   
)

export default User;
