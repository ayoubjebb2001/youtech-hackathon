function hascolor(colors, favorite) {
    console.log(colors.includes(favorite));
    
}
hascolor(["blue", "red", "green"], "blue") // Should return true
hascolor(["blue", "red", "green"], "yellow") // Should return false