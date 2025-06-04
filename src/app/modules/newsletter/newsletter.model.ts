import mongoose, { Schema } from "mongoose";

const newsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Newsletters = mongoose.model("Newsletters", newsletterSchema);
