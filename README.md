# requestIdleCallback polyfill

![](https://img.shields.io/badge/version-1.1.0-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

This requestIdleCallback polyfill doesn't use the window object to detect if the feature is supported in the browser and falls back to a simple timeout if the feature isn't supported.

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

## Using the Promise-based API

```javascript
import requestIdleCallback from '@fseehawer/requestidlecallback';

requestIdleCallback.promise({ timeout: 100 }).then((deadline) => {
// Use the idle deadline to perform tasks
});
```

## for cancelling?

```javascript
import requestIdleCallback, { cancelIdleCallback } from '@fseehawer/requestidlecallback'

// your code
const id = requestIdleCallback(doSomething)

// then if you need to cancel
cancelIdleCallback(id)
```

## license

[MIT License](https://opensource.org/licenses/MIT)
