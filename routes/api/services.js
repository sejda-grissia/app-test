const express = require('express');
const router = express.Router();
router.get('/test', (req,res)=>{
//format to json
  res.json({
    msg: "services"
  })
});
module.exports= router;

