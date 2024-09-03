import {model, Schema, Document} from "mongoose";

interface IUser extends Document {
    username: string;
    email?: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: string;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, "نام کاربری باید انتخاب کنید"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 64,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "guest"],
        default: "guest",
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now, // Automatically set the date when a new user is created
    },
});

const UserModel = model<IUser>('User', userSchema);

export {UserModel, IUser};
