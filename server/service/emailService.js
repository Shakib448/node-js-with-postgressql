import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const emailService = () => {
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
        to: "shakiba448@gmail.com",
        subject: "Hello world",
        text: `Hello world?`,
        html: "<b>Hello Muktadir Bangladesh</b>",
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
  } catch (error) {
    console.log(error);
  }
};
