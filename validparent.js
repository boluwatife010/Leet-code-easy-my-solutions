function isVAlid(s) {
    let placeHolder = [];
    let object = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        if (object[s[i]]) {
            placeHolder.push(s[i]);
        }
        else {
            let notTrue = placeHolder.pop();
            if (object[notTrue] !== s[i]) {
                return false;
            }
            
        }
    }
    return placeHolder.length === 0;
}
console.log(isVAlid('(}'))

// function isVAlid(s) {
//    let brackets = ['(', ')', '[', ']', '{', '}'];
//    for (let i = 0; i < brackets.length; i++) {
//     if ((s[0] && s[1]) === (brackets[0] && brackets[1])) {
//         // let newTrue = [];
//         // newTrue.push(s);
//         return true;
//     }
//     if ((s[0] && s[1]) === (brackets[2] && brackets[3])) {
//         return true
//     }
//      if ((s[0] && s[1]) === (brackets[4] && brackets[5])) {
//         return true;
//     }
//     else if (((s[0] && s[1]) ) !== (brackets[0] && brackets[1])) {
//         return false;
//     }
//     else if (((s[0] && s[1]) ) !== (brackets[2] && brackets[3])) {
//         return false;
//     }
//     else if (((s[0] && s[1]) ) !== (brackets[4] && brackets[5])) {
//         return false;
//     }
//     else {
//         return false;
//     }
//    }
//    return s;
// }
// console.log(isVAlid('(}'));