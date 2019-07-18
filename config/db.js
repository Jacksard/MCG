const mongoose = require('mongoose');
const config = require('config');


const db = config.get('mongoURI');
// Deprecation warning off with this:
mongoose.set('useFindAndModify', false);

const connectDB = async ()=>{
    try {
        await mongoose.connect(db, 
            {useNewUrlParser: true,
            useCreateIndex: true});
            console.log("MongoDB Connected...")
    } catch (err) {
        console.log(err.message);
        process.exit(1);
        
    }
}

module.exports = connectDB;