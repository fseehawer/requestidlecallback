# Simple requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.0.0-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

I published this version to be compatible with the node environment where `window` is not defined.

## install

```
npm install @fseehaewer/requestidlecallback
```

## example

```javascript
import requestIdleCallback from '@fseehaewer/requestidlecallback'

requestIdleCallback(() => {
  // your code
})
```

Or node-style:

```javascript
var requestIdleCallback = require('@fseehaewer/requestidlecallback')

requestIdleCallback(function () {
  // your code
})
```

## for cancelling?

```javascript
import requestIdleCallback, { cancelIdleCallback } from '@fseehaewer/requestidlecallback'

// your code
const id = requestIdleCallback(doSomething)

// then if you need to cancel
cancelIdleCallback(id)
```

Or node-style:

```javascript
var requestIdleCallback = require('@fseehaewer/requestidlecallback')
var cancel = requestIdleCallback.cancelIdleCallback

// your code
var id = requestIdleCallback(doSomething)

// then if you need to cancel
cancel(id)
```

## license

[MIT License](https://opensource.org/licenses/MIT)
