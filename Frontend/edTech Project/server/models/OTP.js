const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

//function => to send mail
async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(email, "Verification email from StudyNotion", otp);
        console.log("Email send successfully", mailResponse);
    }catch(error){
        console.log("error occured while sending mail", error.message);
        throw error;
    }
}

OTPSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp);
    next();
} )

module.exports = mongoose.model("OTP", OTPSchema);
