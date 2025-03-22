
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bookingSchema = new Schema({
    id:{type:Number},
    name:{type: String},
    email: {type:String},
    phone: {type:Number},
    address:{type: String},
    checkIN :{type:string},
    checkOut:{type:String},
    status:{type:String},
    Bstatus:{type:string},
  
}, { timestamps: true }); // Correct placement of timestamps

const Booking = model('Booking', bookingSchema);

export default Booking;