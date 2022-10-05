// Lorem ipsum dolor sit amet.
// Lorem ipsum, dolor sit amet consectetur adipisicing elit.
var str1 = "lOrem ipsum збІльШення продАжів dolOr sit amet.";
var str2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
var palindrome = "Dogma I am God";
// T1
function strLenghtCompare(strOne, strTwo) {
  if (strOne.length > strTwo.length) return 1;
  else if (strOne.length < strTwo.length) return -1;
  else return 0;
}

document.write(`<p>Resault of compare 
is <b>${strLenghtCompare(str1, str2)}</b></p>`);

//  T2
function upperCaseFirstLetter(str) {
  let tmp = str[0].toUpperCase();
  tmp += str.substring(1);
  return tmp;
}
document.write(`<p>Resault: 
<b>${upperCaseFirstLetter(str1)}</b></p>`);

// T3
function countVowelLetters(str) {
  let vowelArray = ["A", "E", "I", "O", "U", "Y"];
  let countVowel = 0;
  for (let strElement of str) {
    if (vowelArray.indexOf(strElement.toUpperCase()) != -1) {
      countVowel++;
    }
  }
  return countVowel;
}
document.write(`<p>Count of vowels: 
<b>${countVowelLetters(str1)}</b></p>`);

// T4
function isSpamFind(str) {
  let spamArray = [
    "100%",
    "безкоштовно",
    "збільшення продажів",
    "тільки сьогодні",
    "не видаляйте",
    "ххх",
  ];
  let tmp = str.toLowerCase();
  for (let strElement of spamArray) {
    if (tmp.indexOf(strElement.toLowerCase()) != -1) return true;
  }
  return false;
}
document.write(`<p>Spam detected: 
<b>${isSpamFind(str1)}</b></p>`);

// T5
function truncateString(str, newLenght) {
  if (newLenght <= 3) return "...";
  else newLenght = newLenght - 3;
  return `${str.substring(0, newLenght)}...`;
}
document.write(`<p>Truncated string: 
<b>${truncateString(str1, 8)}</b></p>`);

// T6
function isPalindrome(str) {
  let tmp = str.split(" ");
  let newStr = "";
  for (let strElement of tmp) {
    newStr += strElement.toLowerCase();
  }
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] != newStr[newStr.length - i - 1]) return false;
  }
  return true;
}
document.write(`<p>Palindrome detected: 
<b>${isPalindrome(palindrome)}</b></p>`);

// T7
function countWord(str) {
  return str.split(" ").length;
}
document.write(`<p>Word's count: 
<b>${countWord(str1)}</b></p>`);

// T8
function maxLengthWordInString(str) {
  let tmp = str.split(" ").sort(strLenghtCompare);
  let word = tmp[tmp.length - 1];
  for (let i = tmp.length - 2; i > 0; i--) {
    if (tmp[i].length == tmp[tmp.length - 1].length) word += `, ${tmp[i]}`;
  }
  return word;
}
document.write(`<p>Max length word: 
<b>${maxLengthWordInString(str1)}</b></p>`);

// T9
function avgLengthWordInString(str) {
  let tmp = str.split(" ");
  let sum = 0;
  for (let strElement of tmp) {
    sum += strElement.length;
  }
  return Math.floor(sum / tmp.length);
}
document.write(`<p>Average length word: 
<b>${avgLengthWordInString(str1)}</b></p>`);

// T10
function printIndexOfSymbol(str, symbol){
    let indexArr = []; let newIndex = 0;
    for(let i in str){
        if(str[i]==symbol){
            indexArr[newIndex] = i;
            newIndex++;
        }
    }
    if(indexArr.length!=0)
    document.write(`<p>List of index for <b>"${symbol}"</b> 
    in <b>"${str}"</b>:
    <b>${indexArr}</b>; count <b>${indexArr.length}</b></p>`);
    else
    document.write(`<p>Did not find <b>"${symbol}"</b></p>`);
}
printIndexOfSymbol(str1, "z");