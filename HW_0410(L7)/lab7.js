function numericDescComparable(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
function numericComparable(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}
function copyArray(arr) {
  let tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    tmpArr[i] = arr[i];
  }
  return tmpArr;
}
function createRandArray(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10 + 1);
  }
  return arr;
}
var my10Array = createRandArray(10);

// Task 1
// T1
function printArray(arr) {
  document.write(`<p>My array: <b>${arr}</b></p>`);
}
printArray(my10Array);

// T2
function printEvenElementOfArray(arr) {
  let tmp = "";
  for (let arrElement of arr) {
    if (arrElement % 2 == 0) tmp += `${arrElement},`;
  }
  tmp = tmp.substring(0, tmp.length - 2);
  document.write(`<p>Even elements of array is <b>${tmp}</b></p>`);
}
printEvenElementOfArray(my10Array);

// T3
function sumElementNumericArray(arr) {
  let sum = 0;
  for (let arrElement of arr) {
    sum += arrElement;
  }
  document.write(`<p>Sum elements of array is <b>${sum}</b></p>`);
}
sumElementNumericArray(my10Array);

// T4
function maxElementOfNumericArray(arr) {
  // let max = arr[0];
  // for(let arrElement of arr){
  //     if(max<arrElement) max = arrElement;
  // }
  let tmpArr = copyArray(arr);
  let max = tmpArr.sort(numericDescComparable)[0];
  document.write(`<p>Max element of array is <b>${max}</b></p>`);
}
maxElementOfNumericArray(my10Array);

// T5
function addElementInArray(arr, index, element) {
  if (index < 0) {
    alert("Wrong index");
    return null;
  }
  let tmpArr = [];
  for (let i = 0; i < index; i++) {
    tmpArr[i] = arr[i];
  }
  tmpArr[index] = element;
  for (let i = index; i < arr.length; i++) {
    tmpArr[i + 1] = arr[i];
  }
  return tmpArr;
}
let someT5TmpArr = addElementInArray(my10Array, 2, 88);
document.write(`<p>New array is <b>${someT5TmpArr}</b></p>`);

// T6
function removeElementInArray(arr, index) {
  if (index < 0 || index >= arr.length) {
    alert("Wrong index");
    return null;
  }
  let tmpArr = [];
  for (let i = 0; i < index; i++) {
    tmpArr[i] = arr[i];
  }
  for (let i = index + 1; i < arr.length; i++) {
    tmpArr[i - 1] = arr[i];
  }
  return tmpArr;
}
let someT6TmpArr = removeElementInArray(my10Array, 0);
document.write(`<p>New array is <b>${someT6TmpArr}</b></p>`);

// Task 2
// T1
my5Array = createRandArray(5);
document.write("////////////////////////////////////////");
printArray(my5Array);

function distinctConcatTwoArray(arrOne, arrTwo) {
  let tmpArr = [];
  let tmpIndex = 0;
  for (let arrElement of arrOne) {
    if (tmpArr.indexOf(arrElement) == -1) {
      tmpArr[tmpIndex] = arrElement;
      tmpIndex++;
    }
  }
  for (let arrElement of arrTwo) {
    if (tmpArr.indexOf(arrElement) == -1) {
      tmpArr[tmpIndex] = arrElement;
      tmpIndex++;
    }
  }
  return tmpArr;
}
let t1TmpArr = distinctConcatTwoArray(my10Array, my5Array);
document.write(`<p>New array is <b>${t1TmpArr}</b></p>`);

// T2
function distinctCommonElementOfTwoArray(arrOne, arrTwo) {
  let tmpArr = [];
  let tmpIndex = 0;
  if (arrOne.length <= arrTwo.length) {
    for (let arrElement of arrOne) {
      if (
        tmpArr.indexOf(arrElement) == -1 &&
        arrTwo.indexOf(arrElement) != -1
      ) {
        tmpArr[tmpIndex] = arrElement;
        tmpIndex++;
      }
    }
  } else {
    for (let arrElement of arrTwo) {
      if (
        tmpArr.indexOf(arrElement) == -1 &&
        arrOne.indexOf(arrElement) != -1
      ) {
        tmpArr[tmpIndex] = arrElement;
        tmpIndex++;
      }
    }
  }
  return tmpArr;
}
let t2TmpArr = distinctCommonElementOfTwoArray(my10Array, my5Array);
document.write(`<p>New array is <b>${t2TmpArr}</b></p>`);

// T3
function differentElementOfTwoArray(arrOne, arrTwo) {
  let tmpArr = [];
  let tmpIndex = 0;
  for (let arrElement of arrOne) {
    if (arrTwo.indexOf(arrElement) == -1) {
      tmpArr[tmpIndex] = arrElement;
      tmpIndex++;
    }
  }
  return tmpArr;
}
let t3TmpArr = differentElementOfTwoArray(my10Array, my5Array);
document.write(`<p>New array is <b>${t3TmpArr}</b></p>`);

// Task 3
// T1

var fruitsArray = [
    "apple",
    "orange",
    "grapefruit",
    "apricot",
    "banana",
    "strawberry",
  "raspberry",
  "watermelon",
  "honeydew melon",
];
fruitsArray.sort();
document.write("////////////////////////////////////////");

function printFruitAtList(fruitArray) {
    let pr = `<ul>`;
    for (arrElement of fruitArray) {
        pr += `<li>${arrElement}</li>`;
    }
    pr += `</ul>`;
  document.write(pr);
}
printFruitAtList(fruitsArray);

function findFruitInArray(fruitArray, element) {
    for (let i = 0; i < fruitArray.length; i++) {
        if (element.toLowerCase() == fruitArray[i].toLowerCase()) return i;
    }
    return -1;
}
let fruit = "StrAwberRy"
document.write(`<p>Index of <b>"${fruit}"</b> is <b>${findFruitInArray(fruitsArray, fruit)}</b></p>`);
fruit = "rose"
document.write(`<p>Index of <b>"${fruit}"</b> is <b>${findFruitInArray(fruitsArray, fruit)}</b></p>`);