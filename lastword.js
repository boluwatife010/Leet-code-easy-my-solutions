const lengthOfLastWord = (s) => {
let spliting = s.trim().split(' ');
let popping = spliting.pop().length;
return popping;

};
console.log(lengthOfLastWord("   fly me   to   the moon  "));