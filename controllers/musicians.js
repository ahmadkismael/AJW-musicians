const express = require('express')
const router = express.Router()

const { Musicians } = require('../models');


module.exports = router;


router.get('/', async (req,res,next) =>{
    try{
        let myMusicians;
        myMusicians  = await Musicians.find({});
        console.log(myMusicians);
        res.render('musicians/index.ejs', {musicians:myMusicians});
    }
catch(err){
        console.log(err)
        return next()
    }
})


router.get('/new', (req,res) =>{
    res.render('musicians/new.ejs')
})

router.get('/:id/edit', async (req,res,next) =>{
    try{
        const editArtist = await Musicians.findById(req.params.id);
        res.render('musicians/edit.ejs', {edit:editArtist} )
    }catch(err){
        console.log(err)
        return next()
    }
})



router.post('/anything', async(req,res,next) =>{
    try{
        const newMusician = await Musicians.create(req.body);
        res.redirect('/musicians')
    }catch(err){
        console.log(err);
        next()
    }
})

router.get('/:id', async (req,res,next) =>{
    try{
        musician = await Musicians.findById(req.params.id);
        res.render('musicians/show.ejs', {musician: musician})
    }catch(err){
        console.log(err);
        return next()
    }
})

router.put('/:id', async (req,res,next) =>{
    try{
        console.log(req.params.id);
        const update = await Musicians.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/musicians');
    }catch(err){
        console.log(err)
        next()
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        console.log(req.params);
        console.log("I'm hitting the delete route");
        const itemGettingDeleted = await Musicians.findByIdAndDelete(req.params.id);
        console.log(itemGettingDeleted);
        res.redirect('/musicians');
    } catch(stuff) {
        console.log(stuff);
        return next();
    }
})