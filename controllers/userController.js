import User from '../models/User.js';

class userController {
    static createUser = async(req, res) => {
        let payload = req.body;
        //image check if have then include image into payload
        var imageUrl = '';
        if(req.file) var imageUrl = `storage/images/${req.file.filename}`;
        payload.avater = imageUrl;

        try {
            const newUser =  await new User({
              payload
            });
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

    }
};

export default  userController;