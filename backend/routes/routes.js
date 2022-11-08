import { Router } from "express";
const router = Router();
import { SEARCH, postReq, putReq, delReq } from "../controllers/controllers.js";
import { signupSendOtp, signupVerifyOtp } from "../controllers/signup.js"


// HTTP requests
router.route("/auth/signup/sendotp").post(signupSendOtp)
router.route("/auth/signup/verifyotp").post(signupVerifyOtp)
router.route("/").get(SEARCH).post(postReq).put(putReq).delete(delReq);

export default router;
