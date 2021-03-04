/* Instead of this
var arr1 = [1, 2, 3];
var arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr1);
console.log(arr2);
*/

// do the function work
function mapForEach(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// Create a function expression that recieves the value of arr[i], then it's multiply by 2
var arr2 = mapForEach(arr1, function(item){
    return item * 2; 
});
console.log(arr2);

var trueOrFalse = mapForEach(arr1, function(item){
    return item > 2;
});
console.log(trueOrFalse);

function checkPassLimit(limiter, item) {
    return item > limiter;
}

var arrBind = mapForEach(arr1, checkPassLimit.bind(this, 1)); 
console.log(arrBind);





// My try to solve the problem 
function newFunction(number) {
    return mapForEach(arr1, checkPassLimit.bind(this, number));
}
console.log(newFunction(2));

// The solution of the teacher
var checkPassLimitSimplier = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPassLimitSimplier(1));
console.log(arr5);


