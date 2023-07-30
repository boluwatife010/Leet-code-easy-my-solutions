function longestPrefix(strs) {
    let prefix = '';
    let value = strs[0];
    for (let i = 0; i < value.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== value[i]) {
                return prefix;
            }
        }
        prefix += value[i];
    }
    return prefix;
}
console.log(longestPrefix(['Strange', 'Strangle', 'Strand', 'Strong'])); // "Str"


// function longestPrefix(strs) {
//     let prefix = ' ';
//     let value = strs[0];
//     for (let i = 0; i < strs.length; i++) {
//         for (let j = 1; j < value.length; j++) {
//             if (strs[i][j] !== value[j]) {
//                 return prefix;
//             }
           
//         }
//         prefix += value[i];
//     }
//     return prefix;
// }
// console.log(longestPrefix(['Strange', 'Strangle', 'Strand', 'Strong']));