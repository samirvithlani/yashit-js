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



var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers)
function even(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}

var evens = numbers.filter(even);
var evens1 = numbers.filter(num=>num%2==0);
console.log(evens1);

var demo = ["a","b","parth"]
console.log("index of.......",demo.indexOf("parth"))


console.log("----------------------------------------")
var x = "10";
var y = 10;

console.log("==",x==y);
console.log("==",x===y);


var technology = ["java","javascript","html","css","php","python","html"];

function search(arr,q){
    function condition(element){
         console.log("element = ",element)
         console.log(element.toLowerCase().indexOf(q.toLowerCase()))
        return element.toLowerCase().indexOf(q.toLowerCase())!== -1;
    }
    return arr.filter(condition);
}

var newTech = search(technology,"");
console.log(newTech);
console.log(technology);








