import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }, 
      status: {
        type: String, default: "active",
      },
      createdAt: {
        type: Date, default: Date.now, 
      },
    }
  );
  
  const User = mongoose.model("User1", UserSchema);
  export default User;