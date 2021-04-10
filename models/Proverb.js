const mongoose = require("mongoose")


const proverbSchema = mongoose.Schema({

    proverb:{

        type: String,
        required: true,
        trim: true
    },

    meaning:{

        type: String,
        required: true,
        trim: true

    },
    
    origin:{
        type: String,
        required: true,
        trim: true

    }

})


module.exports = mongoose.model("Proverb", proverbSchema)