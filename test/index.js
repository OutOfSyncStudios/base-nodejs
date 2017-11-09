const test = require('unit.js');

describe('Base Class', () => {

  const MainClass = require('../');

  it('load', () => {
    const MyClass = require('../');
    const myModule = new MyClass();

    test.assert(myModule instanceof MainClass);
  });
});
