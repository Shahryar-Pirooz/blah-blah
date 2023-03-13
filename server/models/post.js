import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 100,
        required: [true, 'Please provide title'],
    },
    thumbnailImage: String,
    context: String,
    date: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.Model('Post', postSchema)
