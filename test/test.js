const ppplog = require("../src/index.js");

let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

console.log('ppplog', ppplog)

console.log('Testing ppplog with single argument:')
ppplog(a)

console.log('Testing ppplog with multiple arguments:')
ppplog(a, b, c)

console.log('Disabling ppplog:')
ppplog.disableppplog()
ppplog(a)  // 这行不应该有输出

console.log('Enabling ppplog:')
ppplog.enableppplog()
ppplog(a)  // 这行应该有输出

console.log('Testing ppplog with chained calls:')
ppplog(a)(b)(c)()

console.log('Testing ppplog with multiple arguments in chained calls:')
ppplog(a, b, c)(a)(b)(c)()

console.log('Enabling time:')
ppplog.enableTime()
ppplog(a)  // 这行应该在输出前加上当前时间

console.log('Disabling time:')
ppplog.disableTime()
ppplog(a)  // 这行不应该在输出前加上当前时间
