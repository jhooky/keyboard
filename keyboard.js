/**
 * keyboard.js
 */

var keyCode = require('./lib/_keyCode')
var Stream = require('@jhooky/stream')

var keyboard = new Stream()

keyboard.handleEvent = function (e) {
  if (e.defaultPrevented || e.altKey && e.metaKey || e.metaKey) {
    // Do nothing if the event was already consumed.
    // Or its a command for the browser --- aka Meta-Alt-C.
    return
  }

  var pressed = null

  if (e.key !== undefined && keyCode.hasCode(e.keyCode)) {
    if (e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control') {
      pressed = e.key
    }
  } else {
    pressed = keyCode.identify(e.keyCode, e.shiftKey)
  }

  if (pressed) {
    this.write(pressed)
    e.preventDefault()
  }
}

keyboard.activate = function () {
  window.addEventListener('keydown', this, false)
  return this
}

keyboard.deactivate = function () {
  window.removeEventListener('keydown', this)
  return this
}

module.exports = keyboard
