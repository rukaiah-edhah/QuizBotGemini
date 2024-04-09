import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// Mock database
let users = {};

// Handle GET requests
async function handleGetRequest(req, res) {
    res.status(200).json({ message: "Signup GET request response" });
}

// Handle POST requests
async function handlePostRequest(req, res) {
    const { email, password, confirmPassword } = req.body;
    
    // Enhanced validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email provided' });
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    if (users[email]) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users[email] = { email, password: hashedPassword };

    return res.status(201).json({ message: 'User created successfully' });
}

// Handle login requests
async function handleLoginRequest(req, res) {
    const { email, password } = req.body;
    
    const user = users[email];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Upon successful login, return a success message or token as needed
    return res.status(200).json({ message: 'Login successful' });
}


export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        case 'POST':
            if (req.query.login === 'true'){
                return handleLoginRequest(req, res);
            } else {
                return handlePostRequest(req, res);                
            }
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
