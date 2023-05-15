const { Router } = require("express");
const authenticationController = require("./authentication/controllers/authenticationController");

const router = Router();
router.get("/auth", authenticationController.find);

module.exports = router;
