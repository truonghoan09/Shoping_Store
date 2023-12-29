const jwt = require('jsonwebtoken')

let getJWT = async (user) => {
    let {password, ...rest} = user.dataValues;
    let result = await jwt.sign(rest, "123456", {expiresIn: '5m'});
    return (result); 
}

module.exports = getJWT