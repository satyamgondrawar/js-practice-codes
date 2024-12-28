//Addition of two numbers
function myFunction(a,b){
    let c=a+b;
    console.log(c);
}
myFunction(3,6);

//using return;
function multiplication(num1,num2){
    console.log(arguments.length);         //2
    return num1*num2;
}
console.log(multiplication(3,7));          //21



//Function Expression
const x=function(a,b){return a*b};
console.log(x);                            //[function: x]
console.log(x(3,7));                       //21

//arrow function
const f=(x,y)=>{
    return x*y;
}
console.log(f(5,6));

//Function finding max element
function findMax(){
    let max=-Infinity;
    let len=arguments.length;
    for(let i=0;i<len;i++){
        if(arguments[i]>max){
            max=arguments[i]
        }
    }
    return max;
}
maxNum=findMax(34,73,24,45,26,57,22);
console.log(maxNum);

//function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args){
        sum += arg;
        }
    return sum;
}
  
let z = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(z);