import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use("/uploads", express.static("uploads"))
// Serve static files in the uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Allow All Origins with Default of cors(*)
// app.use(cors());
// app.use(
//     cors({
//         origin: 'https://fullstack-web-developmnet-na-amal-duh6.vercel.app',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5555',
    'http://localhost:3000', // Local development
    'http://127.0.0.1:3000', // Alternate localhost
    'https://fullstack-web-developmnet-na-amal-duh6.vercel.app', // Deployed frontend
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no `Origin` (e.g., mobile apps or server-to-server requests)
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true); // Allow the origin
            } else {
                callback(new Error('Not allowed by CORS')); // Reject the origin
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type'], // Allowed headers
        credentials: true, // If you need cookies or Authorization headers
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial')
});

app.use('/books', booksRoute);
app.use('/user', userRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => { console.log(error); });
