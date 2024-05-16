const RatingAndReview = require("../models/RatingAndReviews");
const Course = require("../models/Course");

//create rating
exports.createRating = async (req, res) => {
  try {
    // ..get user id
    const userId = req.user.id;
    //fetch data from req body
    const { rating, review, courseId } = req.body;
    //check if user is enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }
    //check if user already reviewed
    const alreadyReviewd = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });

    if (alreadyReviewd) {
      return res.status(400).json({
        success: false,
        message: "Course is already reviewd by the user ",
      });
    }

    //create rating review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      user: userId,
    });

    //update course raying and reviews
    const updateCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      { $push: { ratingAndReviews: ratingReview._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Rating and reiewsuccesfully added",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while adding rating and reviews",
    });
  }
};

//getAvgRating

//getAllRatings