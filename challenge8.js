function hasfive(numbers) {
    numbers.forEach(element => {
        if(element == 5){
            console.log("true");
            return;
        }
    });
    console.log("false");
}
hasfive([1, 2, 3, 4, 5]) // Should return true
hasfive([1, 2, 3, 4])  // Should return false

