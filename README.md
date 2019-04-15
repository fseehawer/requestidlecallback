# requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.0.3-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

Key features of this requestIdleCallback polyfill:
<ul>
    <li>does not use the window object to detect if the feature is supported in the browser</li>
    <li>server side rendering (SSR) safe</li>
    <li>falls back to a simple timeout implementation</li>
</ul>

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
