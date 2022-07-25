//map
let numbers = [2,4,6,8,10];

function square(num){
    return num*num;
}

var square_number = numbers.map(Math.sqrt);
console.log(square_number);

var str = "javascript";
console.log(str)
var str_array = str.split("");
var asciiArray = str_array.map(x=>x.charCodeAt(0));
console.log(asciiArray);

var employees = [
    {
        name:"parth",salary:5000,bonus:500,tax:1000
    },
    {
        name:"raj",salary:4400,bonus:700,tax:800
    },
    {
        name:"akshit",salary:12000,bonus:1200,tax:2000
    },
    {
        name:"daksh",salary:45000,bonus:4000,tax:4100
    }
]


function salaryCalculator (employee){

    newEmployee ={};
    newEmployee.name = employee.name;
    newEmployee.netEarning = employee.salary + employee.bonus - employee.tax;
    return newEmployee;
}

var newArr = employees.map(salaryCalculator);
console.log(newArr);
//JSON
//MAP -> object ->array [],[]

let numbers1 = [2,4,6,8,10];

const print = (num)=>{
    num = num * num;
    console.log(num);
}
numbers.forEach(print);
var words = ["apple","banana","orange","grape",""];
console.log("BEFORE COPY",words);
words.copyWithin(2,1);
console.log("Aftet copy",words);






