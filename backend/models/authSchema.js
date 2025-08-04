import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    cuponCode: {     // consider renaming to couponCode if it's meant as "coupon"
        type: String,
        trim: true,
    },
    donationRaised:{
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
})

authSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", authSchema);

export default User;
