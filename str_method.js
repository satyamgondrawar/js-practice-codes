//length()
let name="Satyam Mohan Gondrawar";
let len=name.length;
console.log(len);

//charAt() //at()
let text="hello world";
let char=text.charAt(4);
console.log(char);

//charCodeAt()
let txt="hello world";
let letter=txt.charCodeAt(1);
console.log(letter);

//slice()  //substring()  //substr()
let text1="hello world";
console.log(text1.slice(7,13))   //orld
console.log(text1.slice(3))      //lo world
console.log(text1.slice(-10))    //ello world
console.log(text1.slice(-12,-6)) //hello

//toUppercase()
let text2="hello world";
console.log(text2.toUpperCase());

//toLowerCase
let text3="HELLO WORLD";
console.log(text3.toLowerCase());

//concat()
let text4=text2.concat(" ",text3);
console.log(text4);

//trim()
let text5="   Hello World    ";
console.log(text5.trim());

//trimStart()  trimEnd()
let text6="   Hello World    ";
console.log(text6.trimStart());

//padStart()  padEnd()
let text7="5";
console.log(text7.padEnd(7,"0"));

//repeat()
let str1="Hello World";
console.log(str1.repeat(3));

//replace()
let str2="please visit to office";
console.log(str2.replace("office","home"));