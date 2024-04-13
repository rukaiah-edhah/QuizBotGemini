import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { setUser, checkUserExists } from '@/lib/userData';

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end('Method Not Allowed');
    }

    const { email, password, confirmPassword } = req.body;
    
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email provided' });
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    if (checkUserExists(email)) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    setUser(email, { email, password: hashedPassword });

    return res.status(201).json({ message: 'User created successfully' });
}