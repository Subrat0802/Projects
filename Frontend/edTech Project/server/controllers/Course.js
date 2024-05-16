const Course = require("../models/Course");
const Tag = require("../models/tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

//craete course handler function
exports.createCOurse = async (req, res) => {
  try {
    //fetch data
    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;

    //get thumbnail
    const thumbnail = req.files.thumbnailImage;

    //validation
    if (
      (!courseName,
      !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail)
    ) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check for instructor
    const userId = req.user.id;
    const instructorDetails = await User.findById(userId);
    console.log("Instructor Details:", instructorDetails);

    if (!instructorDetails) {
      return res.status(400).json({
        success: false,
        message: "Instructor Details is not found",
      });
    }

    //check given tag is valid or not
    const tagDetails = await Tag.findById(tag);
    if (!tagDetails) {
      return res.status(400).json({
        success: false,
        message: "tag Details is not found",
      });
    }

    //upload iamge to cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    //craete an entery for new course
    const newCourse = await Course.create({
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      tag: tagDetails._id,
      instructor: instructorDetails._id,
      thumbnail: thumbnailImage.secure_url,
    });

    //add the new course to the user Schema
    await User.findByIdAndUpdate({
      _id: instructorDetails._id,
    },
    {
        $push: {
            courses: newCourse._id
        }
    }, {new:true}
    );


    //update the tag Schema
    //hw

    return res.status(200).json({
        success:true,
        message:"Course created successfully",
        data:newCourse
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"error while creating new course"
    })
  }
};



// /get all courses 
exports.showAllCourses = async(req, res) => {
    try{
        const allCourses = await Course.find({}, {courseName:true,
                                                  price:true,
                                                  thumbanil:true,
                                                  instructor:true,
                                                  ratingAndReviews:true,
                                                  studentsEnrolled:true
        }).populate("instructor").exec();
    return res.status(200).json({
        success:true,
        message:"Data for all courses fetched successfully",
        data:allCourses
    })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetched all courses"
        })
    }
}


//getCourseDetails
exports.getCourseDetails = async(req, res) => {
  try{
    //get id
    const {courseId} = req.body;

    //find course details 
    const courseDetails = await Course.find({_id:courseId}).populate(
      {
        path:"instructor",
        polulate:{
          path:"additionalDetails"
        }
      }
    ).populate("category")
    .populate("ratingAndReviews")
    .populate({
      path:"courseContent",
      populate:{
        path:"subSection"
      }
    }).exec();

    //validation
    if(!courseDetails){
      return res.status(400).json({
        success:false,
        message:`Could not find the course with ${courseId}`,
        data:courseDetails
      })
    }
  }catch(error){
    return res.status(500).json({
      success:false,
      message:error.message
    })
  } 
}



//