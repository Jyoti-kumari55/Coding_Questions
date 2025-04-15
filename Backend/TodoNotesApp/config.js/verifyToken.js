const jwt = require("jsonwebtoken");

// function authenticateToken (req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if(!token) {
//         return res.status(401).json({ message: "Access token not found." });
//     }

    // jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
    //     if(err) {
    //         console.error("JWT verification failed:", err.message);
    //         return res.status(403).json({ message: "Invalid or expired token." });
    //     }
    //     req.user = user;
    //     console.log("Decoded user:", user);
    //     next();
    // });
// }

const authenticateToken = async (req, res, next) => {
    let token = req.cookies.token;
    if(!token && req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

    }

    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied' });
      }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
            req.user = decoded.userId || decoded;
            // console.log("Decoded user:", user);
            next();
        
    } catch (error) {
        console.error("JWT verification error:", error.message);
        return res.status(401).json({ error: "Token is not valid or has expired." });
    }
}

module.exports =  authenticateToken ;