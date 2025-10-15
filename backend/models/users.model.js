import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
