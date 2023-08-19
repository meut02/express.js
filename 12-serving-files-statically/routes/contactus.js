const path=require('path')


const express=require('express');

const rootDir=require('../util/path')


const router=express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
})

router.post('/success',(req,res,next)=>{
    res.send('<h1>form successfully filled</h1>')
})

module.exports = router;
