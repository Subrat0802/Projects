const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");

//capture the payment
exports.caqpturePayment = async (req, res) => {
  try {
    //get course id and user id
    const { courseId } = req.body;
    const userId = req.user.id;
    //validation
    //valid courseId
    if (!courseId) {
      return res.json({
        success: false,
        message: "Please provide valid course id",
      });
    }
    //valid courseDetails
    let course;
    try {
      course = await Course.findById(courseId);
      if (!course) {
        return res.json({
          success: false,
          message: "Could not find the course",
        });
      }
      //user already pay for the same course

      const uid = new mongoose.Schema.Types.ObjectId(userId);
      if (course.studentsEnrolled.includes(uid)) {
        return res.statsu(400).json({
          success: false,
          message: "Student is already enrolled",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
    //order create
    const amount = course.price;
    const currency = "INR"

    const options = {
        amount:amount*100,
        currency,
        recipt:Math.random(Date.now().toString()),
        notes:{
            courseId:courseId,
            userId
        }
    }


    try{
        const paymentResponse = await instance.orders.create(options)
        console.log(paymentResponse);
        //return response
        return res.status(200).json({
            success:true,
            courseName:course.courseName,
            courseDescription:courseDescription,
            thumbnail:course.thumbnail,
            orderId:paymentResponse._id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount
        })
    }catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"could not initiate order"
        })
    }
    //return response
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Could not initiate payment"
    })
  }
};



//verify signature
exports.verifySignature = async(req, res) => {
    const webhookSecret = "123456"

    const signature = req.headers("x-razorpay-signature");

    const shasum = crypto.createHmac("sha256", webhookSecret);

    shasum.update(JSON.stringify(req.body));

    const digest = shasum.digest("hex");

    if(signature === digest){
        console.log("payment authorized");

        const {courseId, userId} = req.body.payload.payment.entity.notes;

        try{
            //fulfill action

            //find the course and enroll student in it
            const enrolledCourse = await Course.findOneAndUpdate(
                {_id:courseId},
                {$push: {studentsEnrolled:userId}},
                {new:true}
            );

            if(!enrolledCourse){
                return res.status(400).json({
                    success:false,
                    message:"Course not found"
                })
            }
            console.log(enrolledCourse);

            //find thew student and add the course their list of enrolled course

            const enrolledStudent = await User.findOneAndUpdate(
                {_id:userId},
                {$push: {courses:courseId}},
                {new:true}
            )

            console.log(enrolledStudent);

            //mail send
            const emailResponse = await mailSender(
                enrolledStudent.email,
                "Code help",
                "Congratulation course is onboarded "
            );

            console.log(emailResponse);
            return res.status(200).json({
                success:true,
                message:"Signature varified and course added"
            })

        }catch(error){
            console.log(error);
            return res.status(500).json({
                success:false,
                message:"Error verify signature"
            })
        }
    }
    else{
        return res.json({
            message:"Not verify signature",
            success:false
        })
    }
}