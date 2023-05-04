function removeElement(array, position) {
  if (position === 'left') {
    array.shift();
  } else if (position === 'right') {
    array.pop();
  }
  return array;
}

console.log(removeElement([1, 2, 3, 4, 5], 'left'));
console.log(removeElement([1, 2, 3, 4, 5], 'right'));
console.log(removeElement( ["Edo", "Budi", "Joko", "Tono"], 'left'));
console.log(removeElement(["Edo", "Budi", "Joko", "Tono"], 'right'));
