const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) {
      return {
        index: mid,
        value: arr[mid],
      };
    } else if(arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
};

const arr = [1, 2, 3, 8, 9, 10, 14, 16, 33, 64, 88, 89, 93, 98];
const ind = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13];
const data = binarySearch(arr, 8);

console.log(data)