const mongoose = require("mongoose")
const {Schema , model} = mongoose

const paymentSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref:'User',
        // required : true
    },
    bookingId:{
        type:Schema.Types.ObjectId,
        ref:'Booking',
        // required:true
    },
    amount : {
        type : Number,
        // required : true
    },
    date : {
        type : String,
        // required : true
    },
    status : {
        type : String,
        default : "pending",
        enum : ["pending","successfull"]
    },
    paymentType : {
        type : String,
        // required : true
    },
    transactionId : {
        type : String,
        // required : true
    }
})

const Payment = model("Payment",paymentSchema)

module.exports = Payment