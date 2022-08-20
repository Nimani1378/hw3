let sides = [];
sides[0] = 4;
sides[1] = 6;
sides[2] = 3;
sides.sort();
if(sides[0]**2+sides[1]**2===sides[2]**2){
    console.log("yes");
}
else{
    console.log("no");
}