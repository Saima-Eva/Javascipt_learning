//Traverse an Array

var arr = [4,5,1,6,8,9,40]

for(var i = 0; i < arr.length; i++){
    //console.log(arr[i])
    arr[i] = arr[i] + 2
}
console.log(arr)


//Sum

var arr = [4,5,1,6,8,9,40]
var sum = 0

for (var i = 0; i < arr.length; i++){
    sum += arr[i]
}

console.log(sum)

//Even number

var arr = [4,5,1,6,8,9,40]
for (var i =0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i])
    }
}

//Odd number

var arr = [4,5,1,6,8,9,40]
for (var i =0; i< arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log(arr[i])
    }
}

//Sum of even number

var arr = [4,5,1,6,8,9,40]

const Even = (arr) =>{
var sum = 0
for (var i =0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        sum = sum + arr[i]
    }
}
return sum;
}
console.log(Even(arr));



//Sum of odd number

var arr = [4,5,1,6,8,9,40]

const odd = (arr) =>{
var sum = 0
for (var i =0; i< arr.length; i++){
    if(arr[i] % 2 === 1){
        sum = sum + arr[i]
    }
}
return sum;
}
console.log(odd(arr));