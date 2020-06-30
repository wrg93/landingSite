const db = require("../models")


module.exports=function(app){
    app.post("/api/messages", function(req,res){
        console.log(req.body)
        db.Messages.create(req.body, function(err,data){
            if (err){
                console.log(err)
            }else{
                res.json(data)
            }
    })
})

}