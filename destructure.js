let arr = [1, 99, "Sam", false];


// Create varaible x with the value of 3rd element from above array

let x = arr[2];


// array destructure - index position is used for unpack/destructure
// unpack arr           packed arr nested( array inside array )
let [, z, y, [, , s]] = [1, 2, 3, [99, 86, 77]];         // 3rd value of array

console.log('z', z);
// console.log('a', a);
// console.log('b', b);
console.log('y', y);
console.log('s', s);


// Object Destructure - Key name, keyname becomes var name
let obj = { name: 'Sanjay', year: 'yyyy', date: 'dd', month: 'mm' };

let { month, name } = { name: 'Sanjay', year: 'yyyy', date: 'dd', month: 'mm' };


// custom name destructure
let { month: birthMonth, year: birthYear } = { name: 'Sanjay', year: 'yyyy', date: 'dd', month: 'mm' };

console.log("month", month);
console.log("name", name);
console.log("birthMonth", birthMonth);
console.log("birthYear", birthYear);

// default values while destructure

var arr1 = [1, 2, 3, 99];

var [, , , p = 2] = arr1;

console.log(p);


let { hobbies = "Singing" } = { name: 'Sanjay', year: 'yyyy', date: 'dd', month: 'mm', hobbies: "Dancing" };

console.log(hobbies);

// spread ---> ... should be in right hand side ( RHS )

// rest --> ... should be in left hand side ( lhs )
let arr2 = [1, 2, 10, 9, 3, 4, 8, 7];

let [a, , ...restAllArr] = [1, 2, 10, 9, 3, 4, 8, 7];

console.log(a);
console.log(restAllArr); // array type

let { year, ...restAllObj } = { name: 'Sanjay', year: 'yyyy', date: 'dd', month: 'mm', hobbies: "Dancing" };
console.log(year);
console.log(restAllObj); // object type




