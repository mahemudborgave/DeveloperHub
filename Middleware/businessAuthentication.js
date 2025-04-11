const jwt = require('jsonwebtoken');
const config = require('config');


function middleware(req, res, next){
    //passing token to header
    const token = req.header('AuthenticationToken');

    if(!token){
        return res.status(401).json({msg: "Token missing Authorization denied!"});
    }
    try{
        const decoded = jwt.verify(token, config.get('jwtsecretbusiness'));

        req.business = decoded.business;
        next();
    }
    catch(err){
            res.status(401).json({msg: 'Not a Valid Token'});
    }
};

module.exports = middleware;