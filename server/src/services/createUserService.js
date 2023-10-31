import db from '../models/index';
import bcrypt from "bcrypt";

const CreateUserServices = (data) => {

    const check = async (email) => {
        try {
            const result = await db.User.findOne({
                where: {email}
            }) 
                if (result) return (true)
                else return (false)
            } catch (error) {
                throw(error);
            }
    }

    return new Promise( async (resolve, reject) => {
        let NewUser;
        let emailExist = await check(data.email);
        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(data.password, 1);            
        } catch (error) {
            throw(error);
        }
        if (emailExist === false) {
            try {
                NewUser = await db.User.create({
                    fullName: data.fullname,
                    email: data.email,
                    password: hashPassword
                })
                resolve({
                    err: 0,
                    message: 'You have successfully registered an account!'
                });
            } catch (error) {
                reject(error)
            }
        } else {
            resolve({
                err: 1,
                message: "The email you entered already exists in our system. Please try using a different email."
            })
        }
    })
}

module.exports = CreateUserServices;