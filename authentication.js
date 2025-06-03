function authentication(req,res,next){
    if(req.session && req.session.user){
        next()
    }else{
        res.status(501).json({message:"Not authendicated"})
    }
}

module.exports = authentication;