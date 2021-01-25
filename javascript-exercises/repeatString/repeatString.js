const repeatString = function(word, num) {

    try {
        return word.repeat(num);
    } catch (error) {
        return "ERROR";
    }

}

module.exports = repeatString