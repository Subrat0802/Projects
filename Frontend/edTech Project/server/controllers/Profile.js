const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async (req, res) => {
    try{
        //get data
        const {dateOfBirth="", about="", contactNumber, } = req.body;

        //getUser id
        const id = req.user.id

        //validation
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        //find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId)

        //update profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.contactNumber = contactNumber
        profileDetails.gender = gender

        await profileDetails.save()
        //return response

        return res.status(200).json({
            success:true,
            message:"Profile Updated successfully",
            profileDetails
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error while updating profile"
        })
    }
};



//delete account
exports.deleteAccount = async (req, res) => {
    try{
        //get id
        const id = req.user.id;
        //validation
        const userDetails = await User.findById(id);
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})
        //delete user
        await User.findByIdAndDelete({_id:id})
        //response
        return res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error while deleting profile"
        })
    }
}


exports.getAllUserDetails = async(req, res) => {
    try{
        const id = req.user.id;
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        return res.status(200).json({
            success:true,
            message:"User Data fetched successfully",
            userDetails
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error while fething all users details"
        })
    }
}