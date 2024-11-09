function totalprice(prices) {
    let sum = 0;
    return prices.reduce((sum,item)=> sum+item);
}
console.log(totalprice([2.99, 1.50, 3.00]));
