import jwt from 'jsonwebtoken';

const jwtVerify = async (req, res, next) => {
  try {
    console.log(req.cookies);   // Note: it's cookies, not cookie

    const token = req.cookies.token;   // Assuming token is stored as 'token' cookie
    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({ message: "Please log in" });
    }

    // Use jwt.verify (not jwtVerify) to decode token synchronously or asynchronously
    // jwt.verify can throw error, so wrap in try/catch or use callback
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log("JWT Verification Error:", err);
        return res.status(401).json({ message: "Invalid Token" });
      }
      console.log("Decoded Token:", decodedToken);
      req.user = decodedToken;
      next();
    });

  } catch (error) {
    console.error("JWT Verification Middleware Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default jwtVerify;
