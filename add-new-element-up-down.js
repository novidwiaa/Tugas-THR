function addNewElement(array, element, position) {
  if (position === 'up') {
    array.unshift(element);
  } else if (position === 'down') {
    array.push(element);
  }
  return array;
}

console.log(addNewElement([1, 2, 3, 4, 5], 6, 'up'));
console.log(addNewElement([1, 2, 3, 4, 5], 6, 'down'));
console.log(addNewElement(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up'));
console.log(( ["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down'));
