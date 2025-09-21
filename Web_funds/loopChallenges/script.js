//1. Display odd Numbers
for(var i = 1 ; i <= 20 ; i+=2){
    console.log(i);
}

//2. Decreasing Multiple of 3
for(var i = 100 ; i >= 0 ; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//3. Print the given sequence    4, 2.5, 1, -0.5, -2, -3.5
for(var number = 4 ; number != -5 ; number-= 1.5){
    console.log(number);
}

//4. Sigma 
var sum = 0;
for(var i = 0 ; i <= 100 ; i++){
    sum+=i;
}
console.log(sum);

// 4. in another way :
result = (100*(100+1))/2;
console.log(result);

//5. Factorial
var factorial = 1;
for(var i = 12 ; i >= 1 ; i--){
    factorial *= i;
}
console.log(factorial);