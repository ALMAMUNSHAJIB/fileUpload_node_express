import User from '../models/User.js';
import fs from 'fs';

class userController {
    static createUser = async(req, res) => {
        let payload = req.body;
        //image check if have then include image into payload
        var imageUrl = '';
        if(req.file) var imageUrl = `storage/images/${req.file.filename}`;
        payload.avater = imageUrl;

        try {
            const newUser =   new User(payload);
            await newUser.save();
            res.status(201).json({
                status_code: 201,
                message: "Insterd Successfully!!",
                data: newUser
            }) 
            
        } catch (error) {
           console.log(error);
           res.status(501).json({
               status_code: 501,
               message: error.message,
               error: true
           }) 
        }

    };

    static updateUserById =  async(req, res) => {
        const id =  req.params.id;
        let reqBody = req.body;

        var imageUrl = '';
        if(req.file) var imageUrl = `storage/images/${req.file.filename}`;
        reqBody.avater = imageUrl;

        try {
            const userInfo = await User.findById(id);
            const userPhotoInfo = userInfo.avater;
            if(userPhotoInfo){
                fs.unlinkSync(DIR + userPhotoInfo);
            }
            const updateIteam = await User.findByIdAndUpdate({_id: id}, reqBody);
            res.status(201).json({
                status_code: 201,
                message: "update Successfully!!",
                data: updateIteam
            }) 
            
        } catch (error) {
          console.log(error);  
          res.status(501).json({
            status_code: 501,
            message: error.message,
            error: true
        }) 
        }

    }

    static deleteUserById =  async(req, res) => {
        const id =  req.params.id;
        try {
            const userInfo = await User.findById(id);
            const userPhotoInfo = userInfo.avater;
            if(userPhotoInfo){
                fs.unlinkSync(DIR + userPhotoInfo);
            }
            const userDelete = await User.findByIdAndDelete({_id: id});
            res.status(201).json({
                status_code: 201,
                message: "update Successfully!!",
                data: updateIteam
            }) 
            
        } catch (error) {
          console.log(error);  
          res.status(501).json({
            status_code: 501,
            message: error.message,
            error: true
        }) 
        }

    }
};

export default  userController;