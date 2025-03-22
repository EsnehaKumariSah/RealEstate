
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const buyersSchema = new Schema({
    id:{type:Number},
    name: {type:String},
    email: {type:String},
    phone: {type:Number},
    address: {type:String},
    Room :{type:string},
    status:{type:String},
  

  
}, { timestamps: true }); // Correct placement of timestamps

const Buyers = model('Booking',buyersSchema);

export default Buyers;