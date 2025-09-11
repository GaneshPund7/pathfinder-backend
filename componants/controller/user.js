// const FormSubmission = require("./formModel");

const FormSubmission = require("../models/user");

const submitForm = async (req, res) => {
  try {
    const data = req.body;

    // Create a new record in DB
    await FormSubmission.create(data);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

module.exports = { submitForm };
