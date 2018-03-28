var {
  expect
} = require('chai')

var core = require('../src/main.js');

import cases from './case.json'
for (let key in cases) {
  console.log(key);
  describe(key, function() {
    for (let i in cases[key]) {
      let item = cases[key][i]
      console.log(item)
      it(item.name, () => {
        let left = core[key](...(item['input']))
        let right = item['output']
        expect(left).to.be.deep.equal(right)
      })
    }
  });
}
