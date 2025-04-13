/**
 * requestIdleCallback polyfill
 * This polyfill doesn't use the window object to detect if the feature is supported,
 * falling back to a simple timeout when necessary.
 *
 * @param {Function} cb - Callback to be executed when idle.
 * @param {Object} [options] - Options object.
 * @param {number} [options.timeout=50] - Maximum timeout in ms for the fallback.
 * @returns {number} - A timer ID or requestIdleCallback identifier.
 */
function polyfillRequestIdleCallback(cb, options = {}) {
    if (typeof cb !== 'function') {
        throw new TypeError('Callback must be a function');
    }

    const timeout = options.timeout != null ? options.timeout : 50;
    const now = (typeof performance !== 'undefined' && performance.now)
        ? performance.now.bind(performance)
        : Date.now;
    const start = now();

    return setTimeout(() => {
        // Create a deadline object similar to the native implementation.
        const idleDeadline = {
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, timeout - (now() - start));
            }
        };
        cb(idleDeadline);
    }, 1);
}

/**
 * Promise-based version of requestIdleCallback.
 *
 * @param {Object} [options] - Options object.
 * @param {number} [options.timeout=50] - Timeout in ms.
 * @returns {Promise<Object>} - A promise that resolves with the idle deadline object.
 */
function requestIdleCallbackPromise(options = {}) {
    return new Promise(resolve => {
        requestIdleCallbackPolyfill(resolve, options);
    });
}

// Detect native support; if available, use the browser's requestIdleCallback.
const hasNativeRIC = typeof requestIdleCallback === 'function';
const nativeRIC = hasNativeRIC ? requestIdleCallback : polyfillRequestIdleCallback;
const nativeCancelRIC = (typeof cancelIdleCallback === 'function') ? cancelIdleCallback : clearTimeout;

/**
 * Main exported function. Uses native requestIdleCallback if supported, or falls back to polyfill.
 *
 * @param {Function} cb - Callback function to execute during idle periods.
 * @param {Object} [options] - Options for controlling timeout.
 * @returns {number} - Timer ID or idle callback identifier.
 */
function requestIdleCallbackPolyfill(cb, options) {
    return nativeRIC(cb, options);
}

// Attach additional functionalities.
requestIdleCallbackPolyfill.cancelIdleCallback = nativeCancelRIC;
requestIdleCallbackPolyfill.promise = requestIdleCallbackPromise;

module.exports = requestIdleCallbackPolyfill;
