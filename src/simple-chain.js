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
    if (Number.isInteger(position) && position > 0 && position < this.chainArray.length) {
      this.chainArray.splice(position - 1, 1)
      return this;
    } else {
      this.chainArray = [];
      throw new Error('You can\'t remove incorrect link!');
    }
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

module.exports = {
  chainMaker
};
