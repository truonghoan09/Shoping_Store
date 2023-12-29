let jwt = require('jsonwebtoken');

const CheckTokenServices = (data) => {
    let token = data.token;
    let decodeSuccess = new Promise(async(resolve, reject) => {
        try {
            await jwt.verify(token, "123456");
            resolve(true);
        } catch (error) {
            resolve(false);
            reject(error)
        }
    })
    console.log('decodeSuccess: ',decodeSuccess);
    return (decodeSuccess);
}

module.exports = CheckTokenServices;