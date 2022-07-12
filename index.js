function findMatching (arrayOfWords, string) {
    return arrayOfWords.filter(word => string.toLowerCase() === word.toLowerCase()) 
}

function fuzzyMatch (array, letter) {
    return array.filter(word => word.startsWith(letter))
}

function matchName (array, string) {
    return array.filter(object => object.name === string )
}