const express = require('express');
const app = express();
const guideExpressRoute = express.Router();
let GuideSchema = require('../model/guide.model');

guideExpressRoute.route('/').get((req,res)=>{
    GuideSchema.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }   
    })
})

guideExpressRoute.route('/guide/:id').get((req,res)=>{
    GuideSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        } 
    })
})

guideExpressRoute.route('/add-guide').post((req,res,next)=>{
    GuideSchema.create(req.body,(error, data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        } 
    })
})

guideExpressRoute.route('/del-guide/:id').delete((req,res)=>{
    GuideSchema.findByIdAndRemove(req.params.id,(error, data)=>{
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        } 
    })
})

guideExpressRoute.route('/update-guide/:id').put((req,res)=>{
    GuideSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data);
            console.log('Deleted Successfully')
        } 
    })
})

module.exports = guideExpressRoute;