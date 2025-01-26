import express, { request, response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

const router = express.Router();

// Route for User Sign up
router.post('/signup', async(request, response) => {
    try {
        const { username, email, password } = request.body;

        // Check if the username or email is already registered
        const existingUser = await User.findOne({ $or: [{ username }, { email }]});
        if (existingUser) {
            return response.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return response.status(201).json(newUser);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for User Login
router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(404).json({ message: 'User not found'});
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return response.status(401).json({ message: 'Inavlid passowrd' });
        }

        // Genereate JWT token with userId included
        const token = jwt.sign({ userId: user._id, isLogged: true }, 'your_secret_key', { expiresIn: '1h' });

        return response.status(200).json({ token, username: user.username });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


export default router;