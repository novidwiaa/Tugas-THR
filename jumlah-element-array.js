function countArray(arr) {
  return arr.length;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(countArray(arr1)); // 5

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countArray(arr2)); // 10

const arr3 = [1, 1, 1, 5, 5, 5];
console.log(countArray(arr3)); // 6

const arr4 = ["Edo", "Budi", "Joko", "Tono"];
console.log(countArray(arr4)); // 4

const arr5 = ["Edo", "Budi", "Joko", "Tono", "Edo", "Budi", "Joko", "Tono"];
console.log(countArray(arr5)); // 8

const arr6 = [true, false, true, false, true, false];
console.log(countArray(arr6)); // 6
