
let word = 'This is the best day ever.'
let spliting = word.trim().split(" ");
console.log (spliting);
let popping = spliting.pop().length;
console.log(popping);
// console.log(word.length);
// let spliting = word.split('\n');
// console.log(spliting);
// let list1 = [1, 2, 3, 4, 5];
// let list2 = [1, 2, 4, 5, 6];
// let sorted = [];
// for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//        if (list1[i] === list2[j]) {

//        }
//     }
// }
// console.log(sorted);

/*
let mergeTwoLists = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
console.log(mergeTwoLists([1,1,2,3,4], [2,3,4,5,6]));

*/