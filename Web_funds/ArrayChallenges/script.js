// 1. Always Hungry.

function alwaysHungry(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy, ");
            x++;
        }
    }
    if (x == 0) {
        console.log("I'm Hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// 2. High Pass Filter
console.log("--------------------------------------------------");

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than average
console.log("--------------------------------------------------");

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[0];
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > sum / arr.length - 1) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
var result2 = betterThanAverage([7, 8, 9, 10, 2, 8, 1]);

console.log(result);

// 4. reverse an array
console.log("--------------------------------------------------");

function reverse(arr) {
    // var left = arr[0];
    // var right = arr[arr.length-1];
    // var temp;
    // while(left < right){
    //     temp = left;
    //     left = right;
    //     right = temp;
    //     left++;
    //     right--;
    // }
    // return arr;


    var newArr = [];
    for(var i = arr.length - 1 ; i >= 0 ; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 2 ; i < n ; i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]