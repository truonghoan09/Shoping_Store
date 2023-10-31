import db from "../models"
import bcrypt from 'bcrypt';
import getJWT from "./createJWT";

const SignInServices = async (data) => {
    let email = data.email;
    let password = data.password;
    console.log(`data: `,email,` `,password)
    let user = await db.User.findOne({
        where: {email}
    })
    if (user) {
        // Tồn tại email
        if ( await bcrypt.compareSync(password, user.password)) {
            //Đăng nhập thành công
            let token = await getJWT(user);
            return({
                err: 0,
                message: "Login successful!",
                token: token
            })
        } else {
            //Password sai
            return ({
                err: 1,
                message: "Incorrect password",
            })
        }
    } else {
        // Email chưa được đăng ký
        return ({
            err: 2,
            message: "Your email does not exist in our system.",
        })
    }
}

module.exports = SignInServices