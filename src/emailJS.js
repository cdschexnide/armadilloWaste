/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
emailjs.init("YOUR_USER_ID"); // Initialize EmailJS with your user ID

// Function to send email
export const sendEmail = ({ name, email, message }) => {
  const templateParams = {
    name,
    email,
    message,
  };

  emailjs
    .send(
      /* service ID */ "service_v0pfjum",
      /* template ID */ "template_zbbzrtd",
      templateParams
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};
