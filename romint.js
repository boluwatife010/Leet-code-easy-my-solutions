function romanToInt(roman) {
    map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    let result = 0;
    for(let i = 0; i < roman.length; i++) {
        let initialVal = map[roman[i]];
        let finalVal = map[roman[i+ 1] ];
        if (initialVal < finalVal) {
            result -= initialVal;
        }
        else {
            result += initialVal;
        }
    }
    return result;
}
console.log(romanToInt('III'));