const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const mailsender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//reset password token
exports.resetPasswordToken = async (req, res) => {
  try {
    //getemail from req body
    const email = req.body.email;

    //check user for this email, email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "your email is not rgistered with us",
      });
    }

    //generate token
    const token = crypto.randomUUID();

    //update user by adding token and expiration time
    const updateDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    //create url
    const url = `http://localhost:3000/update-password/${token}`;

    //send mail containing the url
    await mailSender(
      email,
      "Password reset link",
      `Password reset link: ${url}`
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Reset password sent successfully, please check your email",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error while generating reset password link",
    });
  }
};



exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;

    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password not matching",
      });
    }

    //get user details
    const userDetails = await User.findOne({ token: token });

    // if not entry- invaluid token
    if (!userDetails) {
      return res.json({
        success: false,
        message: "token is invalid",
      });
    }
    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        messsage: "token is expired, please regenrate your token",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //pass update
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );
    //return res
    return res.status(200).json({
      success: true,
      message: "password reset successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error while reseting password",
    });
  }
};
