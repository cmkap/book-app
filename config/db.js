require('dotenv').config()
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(
            uri,
            {
                useNewUrlParser: true
            }
        );
        console.log('MongoDB is Connected....')

    } catch(err) {
        console.log('error message:', err.message)
        process.exit(1);
    }
};

module.exports = connectDB;