import { Schema, model } from "mongoose";

const moodSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },

    /*   recommendation: {
    type: Boolean,
    required: true,
    default: false,
  },
  travelDestination: {
    type: String,
    required: true,
    default: null,
  },

  we can add these two properties if want to track our travel recommendations too.
   */
    deletedAt: {
      type: Date,
      default: null,
    },
  },

  { timestamps: true, versionKey: false }
);

const Mood = model("Mood", moodSchema);

export default Mood;
