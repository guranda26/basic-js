const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    return this.process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    return this.process(encryptedMessage, key, "decrypt");
  }

  process(text, key, mode) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(text[i].toUpperCase())) {
        let shift = key[keyIndex % key.length].charCodeAt() - "A".charCodeAt();
        if (mode === "decrypt") {
          shift = -shift;
        }

        let charCode = text[i].toUpperCase().charCodeAt() + shift;
        if (charCode < "A".charCodeAt()) {
          charCode += 26;
        } else if (charCode > "Z".charCodeAt()) {
          charCode -= 26;
        }

        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += text[i];
      }
    }

    if (!this.isDirect) {
      result = result.split("").reverse().join("");
    }

    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
