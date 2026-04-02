// VAR
var a = 10;
console.log(a);  //10

var a = 20;
console.log(a);  //20
// VAR can be re-declared and updated

if (true) {
    var b = 30;
}                       
console.log(b);  //30
// VAR is function-scoped, not block-scoped. It can be accessed outside the block it was declared in.   


// let
let marks = 90;
console.log(marks);  //90

let marks = 95;  //SyntaxError: Identifier 'marks' has already been declared
console.log(marks);  //90 
// let cannot be re-declared in the same scope

if (true) {
    let grade = 'A';
}
console.log(grade);  //ReferenceError: grade is not defined
// let is block-scoped, it cannot be accessed outside the block it was declared in.


// const
const pi = 3.14;
console.log(pi);  //3.14

const pi = 3.14159;  //SyntaxError: Identifier 'pi' has already been declared
console.log(pi);  //3.14
// const cannot be re-declared or updated
