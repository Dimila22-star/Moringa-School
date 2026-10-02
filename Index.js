const people = [
    { name: "Mary", age: 23, gender: "Female" },
    { name: "John", age: 25, gender: "Male" },
    { name: "Jane", age: 21, gender: "Female" }
];

for (let i = 0; i < people.length; i++) {
    console.log("Name: " + people[i].name);
    console.log("Age: " + people[i].age);
    console.log("Gender: " + people[i].gender);
}



/*

const people = [
    { name: "Mary", age: 23, gender: "Female" },
    { name: "John", age: 25, gender: "Male" },
    { name: "Jane", age: 21, gender: "Female" }
];

people.map(function(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Gender: " + person.gender);
});
*/

