let disable = false;
let showTime = false;

function ppplog(...args) {
  if (args.length > 1) {
    for (let v of args) {
      ppplog(v);
    }
    return ppplog;
  }

  if (!disable) {
    showTime ? console.log(new Date(), ...args) : console.log(...args);
  }

  return ppplog;
}

function disableppplog() {
  disable = true;
}

function enableppplog() {
  disable = false;
}

function enableTime() {
  showTime = true;
}

function disableTime() {
  showTime = false;
}


module.exports = ppplog;
module.exports.disableppplog = disableppplog;
module.exports.enableppplog = enableppplog;
module.exports.enableTime = enableTime;
module.exports.disableTime = disableTime;
