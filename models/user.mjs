import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);

export default User;