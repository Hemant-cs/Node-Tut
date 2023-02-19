module.exports =  renderFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('you are not allowed to access this page')
    }else if(req.query.age < 18){
        res.send('user should be 18+')
    }else{
        next();
    }
    

}