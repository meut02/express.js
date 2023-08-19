const express=require('express');

const productcontroller=require('../controllers/contactusref')

const router=express.Router();

router.get('/contactus',productcontroller.getcontactform)

router.post('/success',productcontroller.postcontactform)

module.exports = router;
