const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req,res)=>{
    res.json({message:"crud app"});
});


//add new user to database
router.route("/add").post((req,res)=>{
    let {userName, userPassword} = req.body;
    console.log(`userName: ${userName} userPassword: ${userPassword}`);
    const newUser = new User({userName,userPassword});
    newUser.save()
    .then(()=>{
        // console.log(e);
        res.json({status:"success",
                    message:"user created"});
    })
    .catch(err=>{
        res.status(400).json({status:"fail",error:err});
    });
});


//get list of users
router.route("/allusers").post((req,res)=>{
    User.find({})
    .then(users=>{res.json({status:"success",users})})
    .catch(err=>{res.status(400).json({status:"fail",error:err});});
});

//update user
router.route("/update").get((req,res)=>{
    let {userName, userPassword} = req.body;
    console.log(`username ${userName} userpassword: ${userPassword}`)
    User.findOneAndUpdate({userName:userName},{userPassword})
    .then((data)=>{
        console.log(data);
        if(data !== null){
            res.json({status:"success",message:"user updated"});
        }
        else{
            res.status(400).json({status:"fail"})
        }
        
    })
    .catch(err=>{res.status(400).json({status:"fail",error:err})});
});

//delete user
router.route("/delete").delete((req,res)=>{
    let {userName} = req.body;
    User.findOneAndDelete({userName:userName})
    .then(data=>{
        if(data !== null){
            res.json({status:"success",message:"user deleted"});
        }
        else{
            res.status(400).json({status:"fail"});
        }
    })
    .catch(err=>{res.status(400).json({status:"fail",error:err})})
    
});

module.exports = router;