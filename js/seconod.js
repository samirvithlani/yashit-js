//objects...
//JSON object

var person = {
    name: "John",
    age: 30,
    isMarried: false,
    salary:155.25,
    education: ["Bachelor", "Master", "PhD"],
    hobbies :{
        hobby1: "Reading",
        hobby2: "Coding",
        hobby3: "Swimming"
    }

}
var persons =[

    {
        name: "John",
        age: 30,
        isMarried: false,
        salary:155.25
    },
    {
        name: "Jane",
        age: 25,
        isMarried: true,
        salary:155.25
    },
    {
        name: "Mark",
        age: 28,
        isMarried: false,
        salary:155.25
    }
]

console.log("person = ",person.hobbies)
console.log("person = ",persons)

for(let i=0;i<persons.length;i++){
    console.log("person = ",persons[i].name)
}
