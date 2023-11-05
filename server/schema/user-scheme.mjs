import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
// import mongooseSequence from "mongoose-sequence";


const userSchema = mongoose.Schema({
    name: String,
    uname: String,
    email: String,
    phone: String
})

//autoIncrement.initialize(mongoose.connection);
//userSchema.plugin(autoIncrement.plugin,'user');

// mongooseSequence.initialize(mongoose.connection);
// userSchema.plugin(mongooseSequence, { inc_field: 'id' });

const user =  mongoose.model('user', userSchema);

export default user;