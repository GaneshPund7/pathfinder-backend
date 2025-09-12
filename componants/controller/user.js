// // const FormSubmission = require("./formModel");

// const FormSubmission = require("../models/user");

// const submitForm = async (req, res) => {
//   try {
//     const data = req.body;

//     // Create a new record in DB
//     await FormSubmission.create(data);

//     res.status(200).json({ message: "Form submitted successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to submit form" });
//   }
// };

// module.exports = { submitForm };


// const FormSubmission = require("../models/user");
// const sendMail = require("../utils/mailer");
const sendMail = require("../../nodemailer");
const FormSubmission = require("../models/user");
const submitForm = async (req, res) => {
  try {
    const data = req.body;

    // Save to DB
    await FormSubmission.create(data);
    
    await sendMail({
      from: data.email,  
      to: process.env.ADMIN_EMAIL,  
      subject: "New Form Submission",
      text: `Form submitted by ${data.name} (${data.email})`,
      html: `
        <h3>New Form Submission</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    res.status(200).json({ message: "Form submitted & email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

module.exports = { submitForm };
