const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../Models/userModel");
const registration = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
        })
        let token = jwt.sign({ email: email, userid: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true });
        res.status(201).json({ message: 'User registered and logged in', token });
    } catch (e) {
        res.status(500).json({ message: 'Error registering user', error: e });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign(
                { email: user.email, userid: user._id },
                process.env.JWT_SECRET
            );
            res.cookie("token", token, { httpOnly: true, secure: false });
            return res.status(201).json({ message: 'logged in', token });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error logging in", error });
    }
};


module.exports = {
    registration,
    login
}