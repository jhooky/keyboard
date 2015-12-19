/**
 * keys.js - Convert keyboard event keyCodes to proper output.
 * Using lookup tables
 */

/*
  Firefox specific: 59, 61, 173
*/
var symbolMap = {
  48: ')', 49: '!', 50: '@', 51: '#', 52: '$', 53: '%', 54: '^',
  55: '&', 56: '*', 57: '(', 59: ':', 61: '+', 173: '_', 186: ':',
  187: '+', 188: '<', 189: '_', 190: '>', 191: '?', 192: '~',
  219: '{', 220: '|', 221: '}', 222: '"'
}

var keyMap = {
  8: 'Backspace', 9: 'Tab', 13: 'Enter', 20: 'CapsLock',
  27: 'Escape', 32: 'Space', 33: 'PageUp', 34: 'PageDown',
  35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp',
  39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete',
  48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5,
  54: 6, 55: 7, 56: 8, 57: 9, 59: ';', 61: '=',
  65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g',
  72: 'h', 73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n',
  79: 'o', 80: 'p', 81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u',
  86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z',
  96: 0, 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, // Number Pad
  102: 6, 103: 7, 104: 8, 105: 9, 106: '*', 107: '+', 109: '-',
  110: '.', 111: '/', 144: 'NumLock', 173: '-',
  186: ';', 187: '=', 188: ',', 189: '-', 190: '.', 191: '/',
  192: '`', 219: '[', 220: '\\', 221: ']', 222: '\'' // Single Quote
}

exports.hasCode = function (code) {
  return keyMap.hasOwnProperty(code)
}

exports.identify = function (code, shift) {
  // Code is an integer, shift is a boolean.
  if (keyMap.hasOwnProperty(code)) {
    if (code < 47) { // Command Keys
      return keyMap[code]
    } else if (code > 64 && code < 91) { // Alphabet
      if (shift) return keyMap[code].toUpperCase()
      else return keyMap[code]
    } else if (code > 47 && code < 58) { // Number or Symbol
      if (shift) return symbolMap[code]
      else return keyMap[code]
    } else if (code > 185) { // Other Symbols
      if (shift) return symbolMap[code]
      else return keyMap[code]
    } else {
      return keyMap[code] // Any other code in keyMap
    }
  } else {
    return null
  }
}
