# Simple requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.0.0-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

This version is also compatible in node where `window` is not defined.

## install

```
npm install @fseehawer/requestidlecallback
```

## example

```javascript
import requestIdleCallback from '@fseehawer/requestidlecallback'

requestIdleCallback(() => {
  // your code
})
```

Or node-style:

```javascript
var requestIdleCallback = require('@fseehawer/requestidlecallback')

requestIdleCallback(function () {
  // your code
})
```

## for cancelling?

```javascript
import requestIdleCallback, { cancelIdleCallback } from '@fseehawer/requestidlecallback'

// your code
const id = requestIdleCallback(doSomething)

// then if you need to cancel
cancelIdleCallback(id)
```

Or node-style:

```javascript
var requestIdleCallback = require('@fseehawer/requestidlecallback')
var cancel = requestIdleCallback.cancelIdleCallback

// your code
var id = requestIdleCallback(doSomething)

// then if you need to cancel
cancel(id)
```

## license

[MIT License](https://opensource.org/licenses/MIT)
