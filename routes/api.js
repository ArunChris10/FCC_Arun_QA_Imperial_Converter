'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.route('/api/convert').get((req,res)=>{
    
    const input = req.query.input
    
    let number = convertHandler.getNum(input)
    let unit = convertHandler.getUnit(input)
    
    let result = convertHandler.convert(number,unit)
    
    res.json({ result });
  })

};
