const removeFromArray = function(array) {
    let isValue, index;
    for (let i = 0; i < arguments.length - 1; i++) {
        isValue = (element) => element === arguments[i + 1];
        index = array.findIndex(isValue);
        if (index != -1) {
            array.splice(index, 1);
        }
    }
    return array;

}

module.exports = removeFromArray