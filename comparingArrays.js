function compare(arr1,arr2){
  if(arr1.length !== arr2.length){
  return `the arrays are not equal`
}
for(x1 of arr1 ){
  for(x2 of arr2){
      if (arr2[x2] !== x) {
        return `false`;
      } else {
        return `true`;
      }
}
  }
}



