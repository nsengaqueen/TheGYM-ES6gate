function sort(arr1, arr2) {
  let newarr = [];
  for (i = 0; i < arr1.length; i++) {
    for (i = 0; i < arr2.length; i++) {
      if (arr2.includes(arr1[i])) {
        newarr.push(arr1[i]);
      }
    }
  }
  return newarr.sort((a, b) => a - b);
}
console.log(sort([12, 2, 7, 8], [4, 8, 19, 12, 8]));
