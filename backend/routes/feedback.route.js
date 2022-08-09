const { error } = require("console");
const express = require("express");
const app = new express();
const feedbackExpressRoute = express.Router();
let FeedbackSchema = require('../model/feedback.model');

feedbackExpressRoute.route('/').get((req,res)=>{
        FeedbackSchema.find((error,data)=>{
            if(error){
                return next(error)
            }else{
                res.json(data)

            }
        })
})
feedbackExpressRoute.route('/feedback').post((req,res)=>{
        FeedbackSchema.create(req.body,(error,data)=>{
            if(error){
                return (error) 
            }else{
                res.json(data)

            }
        })
})


module.exports = feedbackExpressRoute;