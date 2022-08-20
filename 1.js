let num = 552;
function tavan2(num1){
    let counter = 1;
    while(true){
        if(counter*counter>num1){    
                return counter;
        }
        counter++;
    }
}
console.log(tavan2(num));