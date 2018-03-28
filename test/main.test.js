var {expect} = require('chai')

var {getFreeBabbage, Baggage, Traveler, Flight} = require('../src/main.js');

import cases from './case.json'
describe('免费行李额度的测试', function () {
  for(let i in cases['getFreeBabbage']){
    let item = cases['getFreeBabbage'][i]
    console.log(item)
    it(item.name,()=>{
      let left = getFreeBabbage(...(item['input']))
      let right = item['output']
      expect(left).to.be.deep.equal(right)
    })
  }
});
