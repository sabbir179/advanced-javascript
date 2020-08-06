//Falsy:
// 0
// ""
// undenfined
// null
// NaN
// false
// Truthy:
// '0', ' ', " ", [], "false"


const name = 12;

if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("condition is false");
}