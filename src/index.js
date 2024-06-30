let disable = false;
let showTime = false;

function ppplog(...args) {
  if (!disable) {
    showTime ? console.log(new Date(), ...args) : console.log(...args);
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
