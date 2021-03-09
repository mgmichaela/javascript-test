var t = [1, 2, [3, [4, 5]], 6, [[[7]]], [8, [9]]];

function sum(list) {
  const arr = [];
  for (const element of list) {
    if (typeof element === 'number') {
      arr.push(element)
    } else if (Array.isArray(list)) {
      arr.push(sum(element))
    }
  }
  let result = 0;
  for (const element of arr) {
    result = result + element;
  }
  return result
}

sum(t);


