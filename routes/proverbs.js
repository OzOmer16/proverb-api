const express = require("express")

const router = express.Router()

const proverbConrollers = require("../controllers/proverbControllers")







router.get("/", proverbConrollers.getAllProverbs)

router.post("/",proverbConrollers.postProverb)


router.get("/:proverbId",proverbConrollers.getParticularProverb)


router.patch("/:proverbId",proverbConrollers.uptadeProverb)


router.delete("/:proverbId",proverbConrollers.deleteProverb)







module.exports = router