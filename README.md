# set-interval-immediately
To execute callback function of setInterval immediately.

## Installation
```
npm install set-interval-immediately --save
```

## Usage
The same usage as `setInterval` and works in both browsers & node.js.
```javascript
const setIntervalImmediately = require('set-interval-immediately');

setIntervalImmediately(
  () => console.log(`I'd be executed immediately`),
  1000,
);
```
