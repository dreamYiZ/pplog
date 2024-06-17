let disable = false;
let showTime = false;

function pplog(...args) {
  if (args.length > 1) {
    for (let v of args) {
      pplog(v);
    }
    return pplog;
  }

  if (!disable) {
    showTime ? console.log(new Date(), ...args) : console.log(...args);
  }

  return pplog;
}

function disablepplog() {
  disable = true;
}

function enablepplog() {
  disable = false;
}

function enableTime() {
  showTime = true;
}

function disableTime() {
  showTime = false;
}


module.exports = pplog;
module.exports.disablepplog = disablepplog;
module.exports.enablepplog = enablepplog;
module.exports.enableTime = enableTime;
module.exports.disableTime = disableTime;
