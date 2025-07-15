function authorize(role){
    return function (req,res,next){
        const user = req.session.user;
        if(user && user.role =="role"){
            next()
        }else{
            res.status(403).json({message:'forbitten'})
        }
    }
}

module.exports = authorize;