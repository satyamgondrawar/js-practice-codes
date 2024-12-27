//length of array
const arr=[4,6,7,8,2,5,9,1];
console.log(arr.length);

//toString()
const fruits=["banana","apple","kiwi","orange","mango"];
console.log(fruits.toString());

//at()
const fruit=["banana","apple","kiwi","orange","mango"];
console.log(fruit.at(2));

//join()
const fruits1=["banana","apple","kiwi","orange","mango"];
console.log(fruits1.join("___"));

//push() for adding element to last & pop() for remove last element
const fruits2=["banana","apple","kiwi","orange","mango"];
let list=fruits2.push("pineapple");
console.log(fruits2);

//unshift() for adding element to first & shift() for remove first element
const list2=["banana","apple","kiwi","orange","mango"];
let list1=list2.unshift("pineapple");
console.log(list2);

//delete()
const list3=["banana","apple","kiwi","orange","mango"];
delete list3[2];
console.log(list3);

//flat()
const arr1=[2,[4,7],[3,1],[6,5]];
console.log(arr1.flat());