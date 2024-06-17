let disable = false;

function pplog(...args) {
  if (args.length > 1) {
    for (let v of args) {
      pplog(v);
    }
    return pplog;
  }

  disable || console.log(...args);

  return pplog;
}

function disablepplog() {
  disable = true;
}

function enablepplog() {
  disable = false;
}


module.exports = pplog;
module.exports.disablepplog = disablepplog;
module.exports.enablepplog = enablepplog;
