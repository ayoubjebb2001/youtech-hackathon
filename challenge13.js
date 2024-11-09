function checknum(numbers) {
    let result = numbers.filter( (number)=> (number % 2 == 0) || (number % 7 == 0)  );
    console.log(result.length == numbers.length);
}

checknum([2, 7, 14, 4]); // Should return true
checknum([2, 7, 15, 4]); // Should return false