const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  isCorrectChar(l) {
    const char = l.charCodeAt();
    return char > 64 && char < 91 ? true : false
  };

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let str = '',
      j = 0;

    message = message.toUpperCase();

    [...message].forEach(item => {
      if (this.isCorrectChar(item)) {
        const firstNum = item.charCodeAt() - 65;
        const secondNum = key[j % key.length].toUpperCase().charCodeAt() - 65;
        const letter = (firstNum + secondNum) % 26;
        str += String.fromCharCode(letter + 65);
        j++;
      }
      else {
        str += item;
      }
    })

    if (this.direction) {
      return str;
    }
    return str.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let str = '',
      j = 0;

    [...message].forEach(item => {
      if (this.isCorrectChar(item)) {
        const firstNum = item.charCodeAt() - 65;
        const secondNum = key[j % key.length].toUpperCase().charCodeAt() - 65;
        let letter = firstNum - secondNum
        letter = letter < 0 ? (letter + 26) % 26 : (letter) % 26

        str += String.fromCharCode(letter + 65);
        j++;
      }
      else {
        str += item;
      }
    })

    if (this.direction) {
      return str;
    }
    return str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
