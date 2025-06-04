import { Router } from "express";
import { NewsletterController } from "./newsletter.controller";

const router = Router();

router.post("/", NewsletterController.createNewsletter);

router.get("/", NewsletterController.getAllNewsletters);

export const newsletterRouter = router;
