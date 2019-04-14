var fallback = function (cb) {
    var start = Date.now()
    return setTimeout(function () {
        cb({
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start))
            }
        })
    }, 1)
}

var isSupported = (typeof requestIdleCallback !== 'undefined')

module.exports = isSupported ? requestIdleCallback : fallback
module.exports.cancelIdleCallback = isSupported ? cancelIdleCallback : clearTimeout
