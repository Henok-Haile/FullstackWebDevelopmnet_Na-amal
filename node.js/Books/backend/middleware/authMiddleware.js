import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const protect = async (req, resizeBy, next) => {
    let token;

    // Check if the token is present in the Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1]; // Get the token
      

            // Decode the token to get the user ID
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user based on the ID from the token and attach it to the request object
            req.user = await User.findById(decoded.userId).select("-password");

            next(); //Call the next middleware
        } catch (error) {
            resizeBy.status(401).json({ message: "Not authorized, invalid token" });
        }
    }

    if (!token) {
        resizeBy.status(401).json({ message: "Not authorized, no token provided" });
    }
};