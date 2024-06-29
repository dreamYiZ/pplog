# ppplog

`ppplog` is a simple logging library that provides a convenient way to control your log output.

## Installation

Install `ppplog` using npm or yarn:

```bash
npm install ppplog
# or
yarn add ppplog
```

## Usage

First, import `ppplog`:

```javascript
const ppplog = require('ppplog');
```

Then, you can use the `ppplog` function to output logs:

```javascript
let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

ppplog(a, b, c);
```

You can also use chain calls:

```javascript
ppplog(a)(b)(c)();
```

## Control Log Output

You can use the `disableppplog` and `enableppplog` functions to disable and enable log output:

```javascript
ppplog.disableppplog();  // Disable log output
ppplog(a);  // This line will not output

ppplog.enableppplog();  // Enable log output
ppplog(a);  // This line will output
```

## Control Time Display

You can use the `enableTime` and `disableTime` functions to control whether to display the current time in the log output:

```javascript
ppplog.enableTime();  // Enable time display
ppplog(a);  // This line will prepend the current time to the output

ppplog.disableTime();  // Disable time display
ppplog(a);  // This line will not prepend the current time to the output
```

## Testing

You can run the following command to run tests:

```bash
npm test
```
