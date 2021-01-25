const sumAll = function() {
    let sum = 0;

    if (Array.from(arguments).every(function(element) { return typeof element === 'number' && element >= 0; })) {
        for (let i = Math.min.apply(null, arguments); i <= Math.max.apply(null, arguments); i++) {
            sum += i;
        }
        return sum;
    }
    return "ERROR";
}

module.exports = sumAll