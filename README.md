# Simple requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.0.2-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

This requestIdleCallback polyfill doesn't use the window object to detect if the browser supports the feature, so works well with SSR.

## install

```
npm install @fseehawer/requestidlecallback
```

## example

```javascript
import requestIdleCallback from '@fseehawer/requestidlecallback'

requestIdleCallback(() => {
  // your non-splittable task
})
```

for splittable task you can use the yielding technique:

```javascript
requestIdleCallback((deadline) => {
  while ((deadline.timeRemaining() > 0) || deadline.didTimeout) {
    // your splittable tasks
  }
})
```

Or node-style:

```javascript
var requestIdleCallback = require('@fseehawer/requestidlecallback')

// same as above
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
