// // api/sendEmail.ts

// import { VercelRequest, VercelResponse } from "@vercel/node";
// import nodemailer from "nodemailer";

// export default async (req: VercelRequest, res: VercelResponse) => {
//   try {
//     const { name, email, message } = req.body;

//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail", // e.g., 'Gmail'
//       auth: {
//         user: "YourEmailAddress@gmail.com",
//         pass: "YourEmailPassword",
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: "YourEmailAddress@gmail.com",
//       to: "RecipientEmailAddress@example.com", // Change this to your recipient's email
//       subject: "New Contact Form Submission",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// };
