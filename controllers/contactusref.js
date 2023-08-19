const rootDir = require('../util/path');
const path = require('path');
exports.getcontactform=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.postcontactform=(req,res,next)=>{
    res.send('<h1>form successfully filled</h1>')
}