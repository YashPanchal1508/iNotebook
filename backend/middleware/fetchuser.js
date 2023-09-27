const jwt = require("jsonwebtoken");
const JWT_SECRET = "yashisgoodboy";


const fetchuser =(req, res, next) =>{
    //Get the user from jwt token and add if to req object

    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({ error: "Enter a  valid auth token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
    req.user = data.user
    next();
    } catch (error) {
        res.status(401).send({ error: "Authenticate valid user" });
        
    }
    
}

module.exports = fetchuser;