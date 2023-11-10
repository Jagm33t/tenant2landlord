import errorHandler from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from '../models/user.model.js';

export const test =(req,res)=>{
  res.json({
    message: 'Api route is working!',
  });
}

export const updateUser = async(req, res, next)=>{
  console.log("params",req.params.id)
  console.log(req.user)
  if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update own account"))
  
  //if user want to update password then hash it.
  try{
if(req.body.password){
  req.body.password = bcryptjs.hashSync(req.body.password, 10)

}
const updateUser = await User.findByIdAndUpdate(req.params.id, {
   $set:{
     username:req.body.username,
     email:req.body.email,
     password:req.body.password,
     avatar:req.body.avatar,
   }
},{new: true})
const {password, ...rest} = updateUser._doc;

res.status(200).json(rest)
  }catch(error){
    next(error)
  }


}