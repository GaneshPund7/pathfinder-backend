const express = require("express");
const { submitForm } = require("../controller/user");
// const { submitForm } = require("./formController");
const router = express.Router();

// POST /api/form
router.post("/", submitForm);

module.exports = router;
