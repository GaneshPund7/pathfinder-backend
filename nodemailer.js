// const nodemailer = require("nodemailer");

// const sendMail = async ({ from, to, subject, text, html }) => {
//   try {
//     // Configure transporter
    
//     const transporter = nodemailer.createTransport({
//       service: "gmail", 
//       auth: {
//         user: process.env.EMAIL_USER,  
//         pass: process.env.EMAIL_PASS, 
//       },
//     });

//     const mailOptions = {
//       from,
//       to,
//       subject,
//       text,
//       html,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully");
//   } catch (error) {
//     console.error("❌ Error sending email:", error);
//   }
// };

// module.exports = sendMail;
const nodemailer = require("nodemailer");

const sendMail = async ({ from, to, subject, text, html }) => {
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Fail fast instead of waiting 5 minutes
      connectionTimeout: 10000, // 10s
      socketTimeout: 10000,     // 10s
    });

    const mailOptions = {
      from,
      to,
      subject,
      text,
      html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message || error);
    return null; // return null so caller knows it failed
  }
};

module.exports = sendMail;
