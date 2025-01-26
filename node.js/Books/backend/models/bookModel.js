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
    },
    {
        timestamps: true,
    },
);

export const Book = mongoose.model('mybook', bookSchema);