import mongoose, { mongo } from 'mongoose';

const boySchema = new mongoose.Schema({
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

const Boy = mongoose.model('Boy', boySchema);

export default Boy;