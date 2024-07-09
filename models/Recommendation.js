import { Schema, model } from "mongoose"
import { destinationSchema } from "./Destination.js"

const recommendationSchema = new Schema({
    emotion: {
        type: String, 
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    categories: {
        city: {
            img: { 
                type: String, 
                required: true 
            },
            destinations: [destinationSchema] // array of subdocuments
        },
        beach: {
            img: { 
                type: String, 
                required: true 
            },
            destinations: [destinationSchema] 
        },
        nature: {
            img: { 
                type: String, 
                required: true 
            },
            destinations: [destinationSchema] 
        }
    }
})

const Recommendation = model("recommendation", recommendationSchema);

export default Recommendation;