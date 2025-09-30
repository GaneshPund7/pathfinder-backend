// //  const sendMail = require("../../nodemailer");
// // const FormSubmission = require("../models/user");
// // const submitForm = async (req, res) => {
// //   try {
// //     const data = req.body;
// // console.log(data)
// //     // Save to DB
// //     // await FormSubmission.create(data);

// //     await sendMail({
// //       from: data.email,  
// //       to: process.env.ADMIN_EMAIL,  
// //       subject: "New Form Submission",
// //       text: `Form submitted by ${data.fullName} (${data.email})`,
// //       html: `
// //         <h3>New Form Submission</h3>
// //         <p><b>My name is:</b> ${data.fullName}</p>
// //         <p><b>My date of birth is:</b> ${data.dob}</p>
// //         <p><b>I am :</b> ${data.profession}</p>
// //         <p><b>Gender:</b> ${data.gender}</p>
// //         <p><b>Email:</b> ${data.email}</p>
// //         <p><b>Message:</b> ${data.message}</p>
// //       `,
// //     });

// //     res.status(200).json({ message: "Form submitted & email sent successfully!" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Failed to submit form" });
// //   }
// // };

// // module.exports = { submitForm };
// const sendMail = require("../../nodemailer");
// const FormSubmission = require("../models/user");

// const submitForm = async (req, res) => {
//   try {
//     const data = req.body;

//     await sendMail({
//       from: process.env.EMAIL_USER,  // ✅ must be your Gmail
//       replyTo: data.email,           // ✅ so you can reply directly to user
//       to: process.env.ADMIN_EMAIL,   // ✅ your receiving email
//       subject: "New Form Submission - Career Guidance Request",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #2c3e50;">📩 New Career Guidance Form Submission</h2>
          
//           <p>You have received a new form submission with the following details:</p>
          
//           <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Full Name:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.fullName}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Date of Birth:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.dob}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Profession:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.profession}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Gender:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.gender}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Mobile NO:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Email:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><b>Message:</b></td>
//               <td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td>
//             </tr>
//           </table>

//           <hr style="margin: 30px 0; border: none; border-top: 2px solid #eee;" />

//           <div style="padding: 10px; background: #f9f9f9; border-radius: 8px;">
//             <h3 style="margin: 0; color: #2c3e50;">Chris Pathfinder</h3>
//             <p style="margin: 2px 0;">Founder & Senior Career Counselor</p>
//             <p style="margin: 2px 0; font-size: 14px; color: #555;">
//               With 14+ years of experience in career counseling and professional development, Chris has dedicated his career to helping individuals discover their potential and achieve their professional aspirations. He holds certifications in career counseling and specializes in psychometric assessments and career transition strategies.
//             </p>
//           </div>

//           <div style="margin-top: 20px;">
//             <h4 style="margin: 0; color: #2c3e50;">🌟 Our Career Guidance Services</h4>
//             <p style="margin: 5px 0; font-size: 14px; color: #555;">
//               Comprehensive career solutions designed to unlock your potential and accelerate your professional growth.
//             </p>
//           </div>
//         </div>
//       `,
//     });

//     res.status(200).json({ message: "Form submitted & email sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     res.status(500).json({ message: "Failed to submit form" });
//   }
// };

// module.exports = { submitForm };


// const sendMail = require("../../nodemailer");

// const submitForm = async (req, res) => {
//   try {
//     const data = req.body;

//      const captchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${data.captchaToken}`;
//     const response = await axios.post(captchaVerifyUrl);

//     if (!response.data.success) {
//       return res.status(400).json({ message: "reCAPTCHA failed. Please try again." });
//     }
//     // 1️⃣ Send mail to Admin (You)
//     await sendMail({
//       from: process.env.EMAIL_USER,
//       replyTo: data.email,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Form Submission - Career Guidance Request",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #2c3e50;">📩 New Career Guidance Form Submission</h2>
//           <p>You have received a new form submission with the following details:</p>
//           <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
//             <tr><td><b>Full Name:</b></td><td>${data.fullName}</td></tr>
//             <tr><td><b>Date of Birth:</b></td><td>${data.dob}</td></tr>
//             <tr><td><b>Profession:</b></td><td>${data.profession}</td></tr>
//             <tr><td><b>Gender:</b></td><td>${data.gender}</td></tr>
//             <tr><td><b>Mobile No:</b></td><td>${data.phone}</td></tr>
//             <tr><td><b>Email:</b></td><td>${data.email}</td></tr>
//             <tr><td><b>Message:</b></td><td>${data.message}</td></tr>
//           </table>
//           <hr />
//           <div style="padding: 10px; background: #f9f9f9; border-radius: 8px;">
//             <h3 style="margin: 0;">Chris Pathfinder</h3>
//             <p>Founder & Senior Career Counselor</p>
//           </div>
//         </div>
//       `,
//     });

//     // 2️⃣ Send mail to Customer (Auto reply)
//     await sendMail({
//       from: process.env.EMAIL_USER,
//       to: data.email,
//       subject: "Thank You for Registering with Pathfinder Career Guidance",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #2c3e50;">🙌 Thank You, ${data.fullName}!</h2>
//           <p>We have successfully received your request. Our team will get in touch with you shortly to guide you on your career journey.</p>
          
//           <div style="margin: 20px 0; padding: 15px; background: #f1f9ff; border-left: 4px solid #2c3e50;">
//             <p><b>Your submitted details:</b></p>
//             <ul style="padding-left: 15px;">
//               <li><b>Date of Birth:</b> ${data.dob}</li>
//               <li><b>Profession:</b> ${data.profession}</li>
//               <li><b>Gender:</b> ${data.gender}</li>
//               <li><b>Mobile No:</b> ${data.phone}</li>
//               <li><b>Email:</b> ${data.email}</li>
//               <li><b>Message:</b> ${data.message}</li>
//             </ul>
//           </div>

//           <p style="margin-top: 20px;">In the meantime, feel free to explore our services:</p>
//           <p><i>“Comprehensive career solutions designed to unlock your potential and accelerate your professional growth.”</i></p>

//           <hr style="margin: 30px 0;" />

//           <div style="padding: 10px; background: #f9f9f9; border-radius: 8px;">
//             <h3 style="margin: 0; color: #2c3e50;">Chris Pathfinder</h3>
//             <p style="margin: 2px 0;">Founder & Senior Career Counselor</p>
//             <p style="margin: 2px 0; font-size: 14px; color: #555;">
//               With 14+ years of experience in career counseling and professional development, Chris has dedicated his career to helping individuals discover their potential and achieve their professional aspirations.
//             </p>
//           </div>
//         </div>
//       `,
//     });

//     res.status(200).json({ message: "Form submitted & emails sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     res.status(500).json({ message: "Failed to submit form" });
//   }
// };

// module.exports = { submitForm };



const axios = require("axios");
const sendMail = require("../../nodemailer");

const submitForm = async (req, res) => {
  try {
    const data = req.body;

    // ✅ Prepare URLSearchParams for Google
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET);
    params.append("response", data.captchaToken);

    // ✅ Verify reCAPTCHA
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      params
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "reCAPTCHA failed. Please try again." });
    }

    // 1️⃣ Send mail to Admin (You)
    await sendMail({
      from: process.env.EMAIL_USER,
      // replyTo: data.email,
      to: process.env.ADMIN_EMAIL,
      subject: "New Form Submission - Career Guidance Request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c3e50;">📩 New Career Guidance Form Submission</h2>
          <p>You have received a new form submission with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr><td><b>Full Name:</b></td><td>${data.fullName}</td></tr>
            <tr><td><b>Date of Birth:</b></td><td>${data.dob}</td></tr>
            <tr><td><b>Profession:</b></td><td>${data.profession}</td></tr>
            <tr><td><b>Gender:</b></td><td>${data.gender}</td></tr>
            <tr><td><b>Mobile No:</b></td><td>${data.phone}</td></tr>
            <tr><td><b>Email:</b></td><td>${data.email}</td></tr>
            <tr><td><b>Message:</b></td><td>${data.message}</td></tr>
          </table>
          <hr />
          <div style="padding: 10px; background: #f9f9f9; border-radius: 8px;">
            <h3 style="margin: 0;">Chris Pathfinder</h3>
            <p>Founder & Senior Career Counselor</p>
          </div>
        </div>
      `,
    });
 

    res.status(200).json({ message: "Form submitted & emails sent successfully!" });
  } catch (error) {
    console.error("Form submission failed:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

module.exports = { submitForm };




// const axios = require("axios");
// const sendMail = require("../../nodemailer");

// const submitForm = async (req, res) => {
//   try {
//     const data = req.body;

//     // ✅ Prepare URLSearchParams for Google
//     const params = new URLSearchParams();
//     params.append("secret", process.env.RECAPTCHA_SECRET);
//     params.append("response", data.captchaToken);

//     // ✅ Verify reCAPTCHA
//     const response = await axios.post(
//       "https://www.google.com/recaptcha/api/siteverify",
//       params
//     );

//     if (!response.data.success) {
//       return res
//         .status(400)
//         .json({ message: "reCAPTCHA failed. Please try again." });
//     }

//     // ✅ Send success response to user immediately
//     res
//       .status(200)
//       .json({ message: "Form submitted successfully! Email will be sent." });

//     // ✅ Send email in background (does not block API response)
//     sendMail({
//       from: process.env.EMAIL_USER,
//       // replyTo: data.email,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Form Submission - Career Guidance Request",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #2c3e50;">📩 New Career Guidance Form Submission</h2>
//           <p>You have received a new form submission with the following details:</p>
//           <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
//             <tr><td><b>Full Name:</b></td><td>${data.fullName}</td></tr>
//             <tr><td><b>Date of Birth:</b></td><td>${data.dob}</td></tr>
//             <tr><td><b>Profession:</b></td><td>${data.profession}</td></tr>
//             <tr><td><b>Gender:</b></td><td>${data.gender}</td></tr>
//             <tr><td><b>Mobile No:</b></td><td>${data.phone}</td></tr>
//             <tr><td><b>Email:</b></td><td>${data.email}</td></tr>
//             <tr><td><b>Message:</b></td><td>${data.message}</td></tr>
//           </table>
//           <hr />
//           <div style="padding: 10px; background: #f9f9f9; border-radius: 8px;">
//             <h3 style="margin: 0;">Chris Pathfinder</h3>
//             <p>Founder & Senior Career Counselor</p>
//           </div>
//         </div>
//       `,
//     })
//       .then(() => console.log("✅ Email sent successfully"))
//       .catch((err) =>
//         console.error("❌ Error sending email (background):", err.message)
//       );
//   } catch (error) {
//     console.error(
//       "Form submission failed:",
//       error.response?.data || error.message
//     );
//     res.status(500).json({ message: "Failed to submit form" });
//   }
// };

// module.exports = { submitForm };
