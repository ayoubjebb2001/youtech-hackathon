function getlevel(score) {
    if(score >= 90){
        console.log("A");
    }else if(score >= 80){
        console.log("B");
    }else{
        console.log("C");
    }
}

getlevel(95) // Should return "A"
getlevel(85) // Should return "B"
getlevel(75) // Should return "C"