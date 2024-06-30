# ppplog

`ppplog` 一键开关所有console.log。

`ppplog` 是一个简单的日志库，它提供了一种方便的方式来控制你的日志输出。

## 安装

使用 npm 或 yarn 安装 `ppplog`：

```bash
npm install ppplog
# 或者
yarn add ppplog
```

## 使用

首先，引入 `ppplog`：

```javascript
const ppplog = require('ppplog');
```

然后，你可以使用 `ppplog` 函数来输出日志：

```javascript
let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

ppplog(a, b, c);
```

你也可以使用链式调用：

```javascript
ppplog(a)(b)(c)();
```

## 控制日志输出

你可以使用 `disableppplog` 和 `enableppplog` 函数来禁用和启用日志输出：

```javascript
ppplog.disableppplog();  // 禁用日志输出
ppplog(a);  // 这行不会有输出

ppplog.enableppplog();  // 启用日志输出
ppplog(a);  // 这行会有输出
```

## 控制时间显示

你可以使用 `enableTime` 和 `disableTime` 函数来控制是否在日志输出中显示当前时间：

```javascript
ppplog.enableTime();  // 启用时间显示
ppplog(a);  // 这行会在输出前加上当前时间

ppplog.disableTime();  // 禁用时间显示
ppplog(a);  // 这行不会在输出前加上当前时间
```

## 测试

你可以运行以下命令来运行测试：

```bash
npm test
```
