import { Schema, model } from "mongoose"

const recommendationSchema = new Schema({
    emotion: {
        type: String, 
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    categories: [
        {
            name: {
                type: String,
                required: true,
            },
            img: { 
                type: String, 
                required: true 
            },
            destinations: []
        }
    ]
})

const Recommendation = model("recommendation", recommendationSchema);

export default Recommendation;