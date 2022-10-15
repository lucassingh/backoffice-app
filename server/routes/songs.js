const router = require('express').Router();
const Song = require('../models/song');

//create song
router.post('/', async(req, res) => {
    try {
        const song = await Song(req.body).save();
        res.status(201).send({data: song, msg: 'song 1'})
    } catch (error) {
        res.status(500).send({msg: 'internal server error'})
    }
})

//get all Songs
router.get('/', async(req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).send({data: songs})
    } catch (error) {
        res.status(500).send({msg: 'internal server error'})
    }
})

module.exports = router