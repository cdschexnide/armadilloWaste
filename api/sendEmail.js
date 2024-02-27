// // import { VercelRequest, VercelResponse } from "@vercel/node";
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// import Mailjet from "node-mailjet";

// // const mailjet = new Mailjet({
// //   apiKey: "a1b59bc11a013bc02ba47b68875d64fa",
// //   apiSecret: "167e7a3c62d05ccba363058fb46991f4",
// // });

// const mailjet = Mailjet.apiConnect(
//   "a1b59bc11a013bc02ba47b68875d64fa",
//   "167e7a3c62d05ccba363058fb46991f4"
// );

// export default async (req, res) => {
//   console.log("hit");
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { name, email, message } = req.body;
//   console.log("req.body", req.body);

//   try {
//     const result = await mailjet.post("send", { version: "v3.1" }).request({
//       Messages: [
//         {
//           From: {
//             Email: "codydschexnider@gmail.com",
//             Name: "Message.From.Name",
//           },
//           To: [
//             {
//               Email: "armadillowaste_inc@yahoo.com",
//               Name: "Armadillo Waste Inc.",
//             },
//           ],
//           Subject: `New message from ${name}`,
//           TextPart: `From: ${name}\nEmail: ${email}\n\n${message}`,
//         },
//       ],
//     });

//     return res.json({ success: true, data: result.body });
//   } catch (error) {
//     if (error instanceof Error) {
//       // Now TypeScript knows `error` is an instance of `Error`
//       console.error(error.message);
//     } else {
//       // Handle or log the error differently if it's not an instance of `Error`
//       console.error(error);
//     }
//   }
// };
