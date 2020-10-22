const Song = require("../models/song")
const { Router } = require("express")
const router = Router()
const songData = require('../db/seedData.json');

//SEED ROUTE
router.get('/seed', async (req, res) => {
	try {
		await Song.deleteMany({});
		const songs = await Song.insertMany(songData);
		res.json({ status: 200, data: songs });
	} catch (err) {
		res.status(400).json({ err });
	}
});




//index route
router.get("/", async (req, res) => {
    res.json(await Song.find({}))
})

//create route
router.post("/", async (req, res) => {
    res.json(await Song.create(req.body))
})

//update route
router.put("/:id", async (req, res) => {
    res.json(await Song.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

//delete route
router.delete("/:id", async (req, res) => {
    res.json(await Song.findByIdAndRemove(req.params.id))
})

//export router
module.exports = router