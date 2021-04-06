var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a:10,
    b:20
}

if(obj1.a === obj2.a && obj1.b === obj1.b){
    console.log(true)
}
else{
    console.log(false)
}


/* Easy Way to compare---
Firstly we convert the properties in string and then 
we compare the object */

var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a:10,
    b:20
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
