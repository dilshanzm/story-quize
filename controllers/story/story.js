var  moment = require('moment');
var storyCallbackModel = require('../../models/story-callback');
var helpers = require('../helpers/common_functions');
const { Op } = require('sequelize');
module.exports = {
   
    callbackURL : async function(req,res){
       try{
        if (!req.body.callerid || !req.body.txid || !req.body.ivrno) {
            const missingFields = [];
            if (!req.body.callerid) missingFields.push("callerid");
            if (!req.body.txid) missingFields.push("txid");
            if (!req.body.ivrno) missingFields.push("ivrno");
            
            return res.status(400).json({
                error: `Bad request: Missing required fields: ${missingFields.join(", ")}`,
            });
        }
        
        req.body.created_at=moment(Date.now()).format("YYYY-MM-DD")
        req.body.req_time=moment().tz("Asia/Colombo").format("HH:mm") + ":00"
        let save = await helpers.save(req.body, storyCallbackModel);
        return res.status(200).json({ status: "Callback URL data store Success"})
     
       }
       catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
    },
   
}

