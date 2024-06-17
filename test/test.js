const pplog = require("../src/index.js");

let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

console.log('pplog', pplog)

console.log('Testing pplog with single argument:')
pplog(a)

console.log('Testing pplog with multiple arguments:')
pplog(a, b, c)

console.log('Disabling pplog:')
pplog.disablepplog()
pplog(a)  // 这行不应该有输出

console.log('Enabling pplog:')
pplog.enablepplog()
pplog(a)  // 这行应该有输出

console.log('Testing pplog with chained calls:')
pplog(a)(b)(c)()

console.log('Testing pplog with multiple arguments in chained calls:')
pplog(a, b, c)(a)(b)(c)()

console.log('Enabling time:')
pplog.enableTime()
pplog(a)  // 这行应该在输出前加上当前时间

console.log('Disabling time:')
pplog.disableTime()
pplog(a)  // 这行不应该在输出前加上当前时间
