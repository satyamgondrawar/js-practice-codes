const car={
    name:"vista",
    model:220,
    year:2011.,
}
//accessing properties
console.log(car.name);
console.log(car["name"]);

//using new keyword
const student=new Object();
student.name="satyam";
student.roll_no=34;
student.id=4546;
console.log(student);

// //this refers to the car object
const person={
    firstName:"Satyam",
    lastName:"Gondrawar",
    age:22,
    fullName: function(){
        return this.firstName+" "+ this.lastName;
    }
};
console.log(person);
console.log(person.firstName);
console.log(person.fullName());
