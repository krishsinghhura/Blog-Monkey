const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; // Retrieve token from cookies or Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Authentication token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to `req.user`
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error });
    }
};

module.exports = authMiddleware;


//body me bhejna padega token