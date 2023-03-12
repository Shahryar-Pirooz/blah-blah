import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    lastname: {
        type: String,
        default: '-',
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 8,
    },
})

export default mongoose.model('User', userSchema)
