const express = require('express');
const app = express();
// const multer = require('multer');
const hotelExpressRoute = express.Router();
let HotelsSchema = require('../model/Hoteldata');




hotelExpressRoute.route('/').get((req,res)=>{
    HotelsSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else { 
            res.json(data)
        }

    })
})

hotelExpressRoute.route('/hotel/:id').get((req,res)=>{
    HotelsSchema.findById(req.params.id,(error,data)=>{
    if (error) {
    return next(error)
    } else {
    res.json(data)
    }
    })
})

hotelExpressRoute.route('/addhotel').post((req,res,next)=>{
    HotelsSchema.create(req.body,(error,data)=>{
    if (error) {
        return next(error)
        } else {
        res.json(data)
        }
})
})


hotelExpressRoute.route('/deletehotel/:id').delete((req,res)=>{
    HotelsSchema.findByIdAndRemove(req.params.id,(error,data)=>{
    if (error) {
    return next(error)
    } else {
    res.status(200).json({
        msg: data
        })
    }
    })
})


hotelExpressRoute.route('/updatehotel/:id').put((req,res)=>{
    HotelsSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
    if (error) {
    return next(error)
    } else {
    res.json(data)
    // console.log('Deleted Successfully')
    }
    })
})


module.exports = hotelExpressRoute;