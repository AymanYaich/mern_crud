const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtract = require('passport-jwt').ExtractJwt;
const User = require ('../models/user')
const key = require('./keys').secretOrKey
const opts={
    jwtFromRequest : JwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : key
}

module.exports = passport =>{
    
    passport.use(
        new JwtStrategy(opts,(payload_id,cb)=>{
            User.findById(payload_id).then((user)=>{
                if(!user){
                    cb(null,false)
                }else{
                   cb(null,user)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        })
    )
 
}