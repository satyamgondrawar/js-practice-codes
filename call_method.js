const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"Satyam",
    lastName: "Gondrawar"
}
const person2 = {
    firstName:"Shivam",
    lastName: "Gondrawar"
}
let x=person.fullName.call(person1);
let y=person.fullName.call(person2);
console.log(x);
console.log(y);

//apply() method similar to call() method