//Método map, devuelve array
: ejecuta una función en cada item de un array.
let nums = [1,2,3,4,5,6];
nums.map(function(num){
    return num*num;
});
arrowfunction
nums.map((num,index) => num*index);

//Método filter, devuelve array
numfiltered = [];
 nums.filter(function(obj){
     return num>3;
 });

 nums.filter(num =>num>3);

 //Métdo reduce devuelve un numero, en este caso

 var n =nums.reduce(function(total,num){
     return total+=num;
 },0);