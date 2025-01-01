const person1 = {
    firstName : "Satyam",
    lastName : "Gondrawar",
    age : 22,
};
const person2={firstName:"Shivam",lastName: "Gondrawar"};

//using  assign()
let text = Object.assign(person1,person2);
console.log(person1.firstName);//Shivam
console.log(person2.firstName);//Shivam

//using entries()
let text2=Object.entries(person1);
console.log(text2);

//using create()
let men=Object.create(person1);
men.firstName="sundaram";
men.lastName="Gondrawar";
console.log(men);

//keys()
let x=Object.keys(person1);
console.log(x);

//values()
let y=Object.values(person1);
console.log(y);

//fromRntries()
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];
let z=Object.fromEntries(fruits);
console.log(z.apples);

const fruit = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}
const result = Object.groupBy(fruit, myCallback);
console.log(result);