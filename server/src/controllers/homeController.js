import CheckTokenServices from "../services/checkTokenServices";
import CreateUserServices from "../services/createUserService"
import SignInServices from "../services/signInServices"

const getHomePage = (req, res) => {
return res.send("Server is Running!");
};

const createNewUser = async (req, res) => {
    let data = req.body; 
    let result = await CreateUserServices(data.data);
    return await res.status(200).json(result); 
}

const signIn = async (req, res) => {
    let data = req.body.data;
    let result = await SignInServices(data);
    return await res.status(200).json(result);
}

const checkToken = async(req, res) => {
    let token = req.body;
    let result;
    result = await CheckTokenServices(token);
    return res.status(200).json(result);
};

module.exports = {
    getHomePage: getHomePage,
    createNewUser: createNewUser,
    signIn: signIn,
    checkToken: checkToken
};
