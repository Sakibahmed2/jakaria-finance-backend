import { Router } from "express";
import { ServiceController } from "./service.controller";

const router = Router();

router.post("/", ServiceController.createService);

router.get("/", ServiceController.getAllServices);

router.get("/:id", ServiceController.getSingleService);

router.patch("/:id", ServiceController.updateService);

router.delete("/:id", ServiceController.deleteService);

export const servicesRouter = router;
