import dotenv from "dotenv";

import userModel from "../models/user.model.js";

dotenv.config();

const GetUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ mesage: "User email required in body!" });
  }

  try {
    const User = await userModel.findOne({ email: email });

    if (User) {
      return res
        .status(200)
        .json({ mesage: "User find sucessfully ", User: User });
    }
  } catch (err) {
    console.error("Error fetching the user", err.response?.data || err.message);
    return res.status(500).json({ error: "Fetcng Failed" });
  }
};

export default {
  GetUser,
};
