"use strict";

var disable = false;
var showTime = false;

function ppplog() {
  if (!disable) {
    var _console, _console2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    showTime ? (_console = console).log.apply(_console, [new Date()].concat(args)) : (_console2 = console).log.apply(_console2, args);
  }

  return ppplog;
}

function disableppplog() {
  disable = true;
  return ppplog; // return ppplog to support chaining
}

function enableppplog() {
  disable = false;
  return ppplog; // return ppplog to support chaining
}

function enableTime() {
  showTime = true;
  return ppplog; // return ppplog to support chaining
}

function disableTime() {
  showTime = false;
  return ppplog; // return ppplog to support chaining
}

module.exports = ppplog;
module.exports.disableppplog = disableppplog;
module.exports.enableppplog = enableppplog;
module.exports.enableTime = enableTime;
module.exports.disableTime = disableTime;