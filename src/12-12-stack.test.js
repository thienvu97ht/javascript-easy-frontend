// [1, 1, 2, 2] => [1, 2]
function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const uniqueNumberSet = new Set(numberList);
  console.log("uniqueNumberSet", Object.keys(uniqueNumberSet));
  // return Array.from(uniqueNumberSet);
  return [...uniqueNumberSet];
}

console.log(uniqueNumbers([1, 1, 2, 2, 3]));

function uniqueLetters(str) {
  if (str.length === 0) return "";

  const uniqueLetterSet = new Set(str);
  return [...uniqueLetterSet].join("");
}

console.log(uniqueLetters("abcabcabc"));

function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();

  for (const item of set1) {
    if (set2.has(item)) {
      intersectionSet.add(item);
    }
  }

  return intersectionSet;
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4, 5]);
console.log(getIntersectionSet(set1, set2));
