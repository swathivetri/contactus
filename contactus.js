const express=require('express');

const router=express.Router();

const path=require('path');
const contactusController=require('../controllers/contactus')


const rootDir=require('../util/path');
router.get('/',contactusController.getcontactus)


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})
router.post('/success',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
})
router.post('/success',contactusController.postcontactus)

module.exports=router;