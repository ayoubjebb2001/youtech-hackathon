function getcategory(age) {
    if(age > 20){
        console.log("adult");
    }else if(age > 12){
        console.log("teen");
    }else{
        console.log("child");
    }
}

getcategory(5);   // Should return "child" (0-12)
getcategory(14);  // Should return "teen" (13-19)
getcategory(25);  // Should return "adult" (20+)