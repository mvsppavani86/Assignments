//initialization - Constant must be initialized , var and let not mandatory to be inititalized
const a=10;
let b;
var c;
console.log('a = '+a);

//reassignment - Constant cannot be reassigned where as let and var can be re assigned
//a=40; //error
b=20; //valid
c=30//valid

console.log('a='+a,'b='+b,'c='+c);

//redeclaration - Var can be redeclared where as let and const cannot be redeclared
var c=40;
console.log('c='+c);
//const a=60; //error - cannot redeclare block scoped variable
//let b=100; //rror- cannot redeclare block scoped variable

//scope - var is not block scoped where as let and cost are blockscoped
{
    const x=10;
    var y;
    let z;
    z='pavani';
    y=20;
    console.log(x,y,z);
}
//console.log(x);//error: ReferenceError: x is not defined
console.log('y='+y);
//console.log('z='+z);//error: ReferenceError: z is not defined


