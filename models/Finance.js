
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bookingSchema = new Schema({
    id:{type:Number}, 
    name: {type:String},
    amount: {type:number},
    transactionType:{type:String},
    catogery:{type:String},
    paymentMode:{type:String},
    status:{type:String},
  
}, { timestamps: true }); // Correct placement of timestamps

const Booking = model('Booking', bookingSchema);

export default Booking;