import config from "../../config/config";
import { Users } from "./auth.model";
import { TAuthUser } from "./auth.type";
import jwt from "jsonwebtoken";

const createUser = async (user: TAuthUser) => {
  const result = await Users.create(user);

  const isUserExists = await Users.findOne({ email: user.email });

  if (isUserExists) {
    throw new Error("User already exists");
  }

  return result;
};

const loginUser = async (user: TAuthUser) => {
  const isUserExists = await Users.findOne({ email: user.email });

  if (!isUserExists) {
    throw new Error("User not found");
  }

  const isPasswordMatch = isUserExists.password === user.password;

  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }

  const jwtPayload = {
    userId: isUserExists._id,
    email: isUserExists.email,
    role: isUserExists.role,
  };

  const token = jwt.sign(jwtPayload, config.jwtSecret, {
    expiresIn: "10d",
  });

  return {
    token,
  };
};

export const AuthService = {
  createUser,
  loginUser,
};
