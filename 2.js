function js2(num){
    let sum = 0;
    let counter = 1;
    while(counter <= num/2){
        if(num%counter===0){
            sum = sum + counter;
        }
        counter++;
    }
    console.log(sum);
    if(num === sum){return "yes"}
    if(num != sum){return "no"}

}
console.log(js2(27));