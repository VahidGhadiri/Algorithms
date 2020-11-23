const binarySearch = (arr, elm) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elm && start <= end) {
    if (elm < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elm) {
    return middle;
  }
  return -1;
};

const testOne = [2, 5, 6, 9, 13, 15, 28, 30];
console.log(binarySearch(testOne, 15));
