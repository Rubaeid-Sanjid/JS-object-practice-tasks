//Task-1:
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);

console.log("==================================================================");

//Task-2:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;

console.log(car);
console.log("==================================================================");

// Task-3:
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
console.log("==================================================================");

//Task-4:
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const totalProperties = Object.keys(student2).length;
console.log(totalProperties);

console.log("==================================================================");

//Task-5:
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};
for (const key in myObject) {
    console.log("key: " +key+ " | type: "+ typeof myObject[key]); 
}