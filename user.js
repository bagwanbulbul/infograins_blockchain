const mongoose = require("mongoose")
const schema = mongoose.Schema
const Users = new schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    companyName: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
    },
	country:{
		type:String,
	},
    emploeNumber:{
        type: String,
    }    
    
}, { strict: false });
var User = mongoose.model("Users", Users)
module.exports = User