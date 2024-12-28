//this keyword for fullname
const person={
    firstname:"Satyam",
    lastname:"Gondrawar",
    age:22,
    fullname: function myFunction(){
        return this.firstname +" "+this.lastname;
    }
};
console.log(person.age);
console.log(person.fullname());