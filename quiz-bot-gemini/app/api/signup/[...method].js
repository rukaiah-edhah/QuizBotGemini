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

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}