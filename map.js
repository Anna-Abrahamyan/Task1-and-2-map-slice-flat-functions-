// Task 1
//map
const arr = [2, 4, 6];
let mapArray = [];

function map(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
  return mapArray;
}

console.log(
  map(arr, function (val, index, array) {
    mapArray.push(val + 1);
    console.log(index);
    console.log(array);
  })
);

// slice

function slice(arr, start, end) {
  let result = [];
  from = Math.max(start, 0);
  to = Math.min(end);

  if (!end || end > arr.length) {
    for (let i = from; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else {
    for (let i = from; i < to; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(slice(arr, 1, 2));

// Task 2
// flat
function flat(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flat([[[[0], [1]], [[[2], [3]]], [[4], [5]]]]));
