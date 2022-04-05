import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = Schema({
     name: {
         type: String,
         required: [true, 'Please enter name'],
         trim: true,
         maxLenght: [100, 'name can not exceed 100 character']
     },
     email: {
         type: String,
         required: true
         
     },
     active: {
         type: Boolean,
         required: true,
         default: true
     },
     avater: {
         type: String,
         required: false
     }
});

const User =  model('User', userSchema);
export default User;