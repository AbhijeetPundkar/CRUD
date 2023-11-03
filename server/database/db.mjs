import mongoose from 'mongoose';


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@crud-app.pl19q9w.mongodb.net/?retryWrites=true&w=majority`;
 
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true} );
       console.log(`Database connection established`);
    }catch(e){
        console.log("Error: " + e.message)}
}

export default Connection;