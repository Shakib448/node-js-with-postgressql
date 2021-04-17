import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const emailService = (name, email, subject) => {
  console.log({ name, email, subject });
  try {
    async function main() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });

      let info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        html: `<h1>Hi ${name}</h1> 
          Thanks for your valuable email We will contact you very soon.
          Thanks & Regards
          Muktadir Team
        `,
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
  } catch (error) {
    console.log(error);
  }
};
