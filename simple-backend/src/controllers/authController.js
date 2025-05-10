const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config');

class AuthController {
    constructor(User) {
        this.User = User;
    }

    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            const newUser = new this.User({ name, email, password });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            // handle duplicate email
            if (error.code === 11000) {
                return res.status(409).json({ message: 'Email already in use' });
            }
            console.error('Register error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await this.User.findOne({ email });
            if (!user || !(await user.isValidPassword(password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Error logging in', error });
        }
    }
}

module.exports = AuthController;