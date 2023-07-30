let strs = ['Praise', 'Priest', 'Practice', 'Prawn'];
if (strs.length === 0)  {
    console.log('');
}
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === ' ') return '';
        }
    return ans;   
    
    }

// let s, value;
// s = 125;
// value = {
//     1000: 'M',
//     500: 'D',
//     100: 'C',
//     50: 'L',
//     10: 'X',
//     5: 'V',
//     1: 'I'
    
// }
// if(s < 1000 && s < 500) {
//     console.log(value[100],value[10],value[10],value[5]);
// }
// else if (s < 1000) {
    
// }
// else {
//     console.log(false);
// }

// let value =  -121;
// let toString = String(value);
// let reversed = toString.split('').reverse().join('');
// let toNumber = Number(reversed);
// console.log(reversed);
// if (value === toNumber) {
//     console.log('Palindrome number.');
// }
// else {
//     console.log('Not a palindrome');
// }