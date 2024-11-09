function shortword(words) {
    words = words.filter( (word)=>word.length <= 3);
    return words
}

console.log(shortword(["cat", "mouse", "dog"])) // Should return ["cat", "dog"]