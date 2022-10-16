const router = require('express').Router();
const File = require('../models/file');

//create file
router.post('/', async(req, res) => {
    try {
        const file = await File(req.body).save();
        res.status(201).send({data: file, msg: 'upload file!'})
    } catch (error) {
        res.status(500).send({msg: 'internal server error'})
    }
})

//get all files
router.get('/', async(req, res) => {
    try {
        const files = await File.find();
        res.status(200).send({data: files})
    } catch (error) {
        res.status(500).send({msg: 'internal server error'})
    }
})

module.exports = router