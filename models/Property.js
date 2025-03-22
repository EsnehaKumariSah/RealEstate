
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const propertySchema = new Schema({
    propertyTitle: {type:String},
      propertyType: {type:String},
    address: {type:String},
    Price:{type:Number},
   areaSqrt :{type:number},
    furnishing:{type:String},
    status:{type:String},

    

    
}, { timestamps: true }); // Correct placement of timestamps

const Property = model('Property', propertySchema);

export default Property;