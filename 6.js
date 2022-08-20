function js6(degree , days){
    if(days===0){return 20;}
    else if (days === 7){return degree;}
    else{
        if(degree-days >= 0){return degree-days;}
        else{return 0;}
    }
}
console.log(js6(14,0));
console.log(js6(17,7));
console.log(js6(10,6));
console.log(js6(9,10));