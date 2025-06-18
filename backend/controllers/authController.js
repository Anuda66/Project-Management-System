const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//genarate jwt token--------------------------------------
const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
};

//@desc Register a new user--------------------------------------
//@route POST /api/auth/register
//@access Public
const registerUser = async (req, res) => {
    try {
        const {name, email, password, profileImageUrl, adminInviteToken} = req.body;

        // Check if user already exists
        const userExists = await User.findOne ({email})
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Determine user role
        if (adminInviteToken && adminInviteToken == process.env.ADMIN_INVITE_TOKEN) {
            role= 'admin';
        }

        // Hash password
        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
            role
        })

        // return user data with JWT 
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id)
        })        
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//@desc Loging User--------------------------------------
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await User.findOne({ email });
        if (!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        //return data with JWT
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id)
        })

    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//@desc get user profile
//@route GET /api/auth/profile
//@access privete (Requires JWT)
const getUserProfile = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//@desc updaete user profile
//@route PUT /api/auth/profile
//@access privete (Requires JWT)
const updateUserProfile = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {registerUser, loginUser, getUserProfile, updateUserProfile}
