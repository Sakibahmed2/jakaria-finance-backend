import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Services = mongoose.model("Services", serviceSchema);
