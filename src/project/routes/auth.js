import { Router } from 'express';
const router = Router();
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { findOne } from '../models/User';

// Login route
router.post('/login', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find user by username in database
    const user = await findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare hashed password with provided password
    const passwordMatch = await compare(password, user.password);

    // If passwords do not match, return error
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If passwords match, generate JWT token
    const token = sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return JWT token to client
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
