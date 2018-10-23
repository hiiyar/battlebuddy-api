const userModel = require('../models/user');
const mongoose = require('../config/mongoose');

module.exports.getUserByEmail = async (email) => {
    return await userModel.findOne({
        "email": email
    });
}

module.exports.getById = async (id) => {

    if(mongoose.Types.ObjectId.isValid(id))
        return await userModel.findById(id, "name email integrations");

    return null;
}

module.exports.updateUser = async (id, data) => {

    if(mongoose.Types.ObjectId.isValid(id))
        return await userModel.findByIdAndUpdate(id, data, {new: true, select: "name email integrations"});

    return null;

}

module.exports.insert = async (user) => {

    try {

        const newUser = new userModel({
            name: user.name,
            email: user.email,
            password: user.password
        });

        if (newUser.save()){
            return {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            };
        }



    } catch (e) {

        console.log(e);

        return e;
    }
}

module.exports.login = async(email, pass) => {

    const user = await userModel.findOne({
        email: email,
        password: pass
    });

    return user;

}