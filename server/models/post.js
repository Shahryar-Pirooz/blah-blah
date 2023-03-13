import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
        },
    ],
})

export default mongoose.Model('Post', postSchema)
