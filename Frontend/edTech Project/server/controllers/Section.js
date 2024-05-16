const Section = require("Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    //data fetch
    const { sectionName, courseId } = req.body;

    //data validateion
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing properties",
      });
    }

    //create section
    const newSectionDetails = await Section.create({ sectionName });

    //update course with section id
    const updateCourse = await Course.findByIdAndUpdate(
      courseId,
      { $push: { courseContent: newSectionDetails._id } },
      { new: true }
    )
      .populate("Section")
      .populate("SubSection")
      .exec();

    //return res
    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      newSectionDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating Sections",
    });
  }
};


exports.updateSection = async (req, res) => {
  try {
    //data input
    const { sectionName, sectionId } = req.body;

    //data validation
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing properties",
      });
    }

    //update data
    const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new:true});
    
    //return res
    return res.status(200).json({
        success:true,
        message:"Section Updated successfully"
    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Error while updating Sections",
      });
  }
};


exports.deleteSection = async(req, res) => {
    try{
        //get id - assuning
        const {sectionId} = req.params

        //use findByIdandDelete
        await Section.findByIdAndDelete(sectionId);

        //return res
        return res.statsu(200).json({
            success:true,
            message:"Section deleted successfully"
        })
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting Sections",
          });
      }
}