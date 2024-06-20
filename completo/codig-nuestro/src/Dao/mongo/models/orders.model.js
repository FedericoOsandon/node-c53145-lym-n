const {Schema, model} = require('mongoose');

const ordersSchema = new Schema({
    code: { 
        type: String, 
        unique: true, 
        required: true 
    },
    purchase_datetime: { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    purchaser: { 
        type: String, 
        required: true 
    }
});

const ordersModel = model('Ticket', ordersSchema);

module.exports = { 
    ordersModel
}