var students = ["John", "J", "Maa", "Markis", "Bob","bbb"];
console.log(students);
console.log(students.length);

function len_comp(a,b){

    return a.length - b.length;
}

//students.reverse();
students.sort((a,b)=>{return  a.length - b.length});
console.log(students);

var age = [1000,5,20,45,78,96,366,478,963]
console.log(age);
age.sort((a,b)=>a-b)
console.log(age);

var num = [2,3,5,7,9,11]
let removed_element = num.splice(4,2);
console.log("removed...",removed_element)
console.log(num);

var tech = ["html","css","html","js","php","python","html","java"];

console.log(tech.indexOf("html"))
console.log(tech.lastIndexOf("html"))
let removed = tech.splice(-2,2,"ruby","c++","c#");
console.log(removed);
console.log(tech);









