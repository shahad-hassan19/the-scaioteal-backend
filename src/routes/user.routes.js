import { Router } from "express";
import { formSubmission } from "../controllers/formSubmission.js";

const router = Router()

router.route("/form-submission").post(formSubmission)


export default router;