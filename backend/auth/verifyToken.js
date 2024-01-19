import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;

  //check token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No Token,Authorization denied" });
  }

  try {
    const token = authToken.split("")[1];

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    if (err.name === "Token Expired Error") {
      return res.status(401).json({ message: "Token Is Expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
