import { Newsletters } from "./newsletter.model";
import { TNewsletter } from "./newsletter.type";

const createNewsletter = async (data: TNewsletter) => {
  // Check if the email already exists
  const existingNewsletter = await Newsletters.findOne({ email: data.email });
  if (existingNewsletter) {
    throw new Error("Email already subscribed to the newsletter.");
  }

  const result = await Newsletters.create(data);
  return result;
};

const getAllNewsletters = async () => {
  const newsletters = await Newsletters.find().sort({ createdAt: -1 });
  return newsletters;
};

export const NewsletterService = {
  createNewsletter,
  getAllNewsletters,
};
