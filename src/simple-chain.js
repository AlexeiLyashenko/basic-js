const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  chainConnector: '~~',

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    this.chainArray.push(`( ${value} )`);

    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) || position < 1 || position > this.chainArray.length || !isFinite(position)) {
      this.chainArray = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chainArray.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },

  finishChain() {
    const finishValue = `${this.chainArray.join('~~')}`;
    this.chainArray = [];
    return finishValue;
  },
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
//, '( 3rd )~~( function () { } )')

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// , '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')

// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
// // , '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');

// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain())
// // , '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
// console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain())
// // '( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true )');

module.exports = {
  chainMaker
};
