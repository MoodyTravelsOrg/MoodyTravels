import { Schema } from "mongoose";

export const destinationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "https://via.placeholder.com/100x100.png"
    }
})