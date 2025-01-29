import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User model
            ref: "User", // Must match the name of the model in userModel.js
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Book = mongoose.model('mybook', bookSchema);