import mongoose, { mongo } from 'mongoose';

const girlSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    readyToPlay: Boolean
});

const Girl = mongoose.model('Girl', girlSchema);

export default Girl;