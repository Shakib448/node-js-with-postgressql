import dotenv from "dotenv";
import Twilio from "twilio";

dotenv.config();

export const smsService = () => {
  const from = process.env.PHONE_NUMBER;
  const to = process.env.MY_NUMBER;

  const twilio = Twilio(process.env.TOKEN_SID, process.env.TOKEN_SECRET, {
    accountSid: process.env.ACCOUNT_SID,
  });

  twilio.messages
    .create({
      from,
      to,
      body: "Hello from Twilio",
    })
    .then((message) => console.log(`Message send with sid ${message.sid}`))
    .catch((error) => console.log(error));
};
