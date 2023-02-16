
const express = require("express");
const router = express.Router();

const phonesData = require('../data/phones.json')


router.get("/", (req, res) => {
  res.send(phonesData)
});

router.get("/:phoneId", (req, res, next) => {
  const phoneId = req.params.phoneId

  if (phoneId < 0 || phoneId >= phonesData.length){
    res.status(404).json( { message: `Phone with id ${phoneId} not found`} );
  }
  res.send(phonesData[phoneId])
});

module.exports = router;
