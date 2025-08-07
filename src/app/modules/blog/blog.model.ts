import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    conclusion: {
      type: String,
      required: false,
    },
    createdDate: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Blogs = mongoose.model("Blogs", blogSchema);
