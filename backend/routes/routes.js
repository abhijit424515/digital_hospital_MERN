const express = require("express");
const router = express.Router();
const {
  SEARCH,
  postReq,
  putReq,
  delReq,
} = require("../controllers/controllers");

// HTTP requests
router.route("/").get(SEARCH).post(postReq).put(putReq).delete(delReq);

module.exports = router;
