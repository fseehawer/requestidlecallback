# requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.0.6-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

The key features of this requestIdleCallback polyfill is that it does not use the window object to detect if the feature is supported in the browser. So it will not cause any issues with SSR and falls back to a simple timeout if requestIdleCallback is not supported. 

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
