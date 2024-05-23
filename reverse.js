function Reverse(obj) {
  let newObj = {};
  for (let x in obj) {
    newObj[obj[x]] = x;
  }
  return newObj;
}
console.log(Reverse({ aa: "1", bf: "3", cq: "5" }));
