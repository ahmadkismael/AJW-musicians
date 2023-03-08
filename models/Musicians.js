const mongoose = require('mongoose')

const musiciansSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "insert a name"]
        },
        img:{
            type:String,
            required: [true, "insert an URL"]
        },
        instrument:{
            type:String,
            Default: "Piano"
        }
    },
    {
        timestamps:true
    }
);

const Musicians = mongoose.model('Musicians', musiciansSchema);

module.exports = Musicians;