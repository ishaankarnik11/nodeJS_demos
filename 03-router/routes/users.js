const router = require("express").Router();

router.route("/").get((req,res)=>{
    res.json({message:`your message '${req.body.message}' received`});
});

module.exports = router;