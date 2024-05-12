const mongoose = require('mongoose')

const Schema =  mongoose.Schema


const shuttleSchema = new Schema({

   
    VehicleNumber : {
        type : String,
        required : true
    },
    Route : {
        type : String,
        required : true
    },
    VehicleType: {
        type: String, // This field will store the selected subject from the dropdown
        
    },
  
    DriverName : {
        type : String,
        required : true
    },
    
})

const Shuttle = mongoose.model("shuttle",shuttleSchema)

module.exports = Shuttle;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Shuttle = mongoose.model("Shuttle", shuttleSchema);

// const shuttleSchema = new Schema({
//   VehicleNumber: String,
//   Route: String,
//   VehicleType: String,
//   DriverName: String,
// });


