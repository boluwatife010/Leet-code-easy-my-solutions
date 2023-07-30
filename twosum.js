//Creating an array that produce the sum

function twoSum(num, target) {
    num = [];
    target = 0;
    for(let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if(num[i] + num[j] === target) {
                return [i, j];
            }
        }
    }
    console.log(twoSum([1, 2, 3, 4,5], 9));
}
// let arr = [1, 2, 3, 4, 5];
// let target = 9;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             console.log([i, j]);
//         }
//     }
// }
