const reverseString = function(word) {
    let newWord = "";
    for (let i = 1; i < word.length + 1; i++) {
        newWord += word[word.length - i];
    }
    return newWord;
}

module.exports = reverseString