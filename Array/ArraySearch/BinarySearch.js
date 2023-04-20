// Binary Search With Recursion
const binarySearchWithRecursion = (array, targetValue) => {
  // Main Search Function
  const binarySearch = (array, targetValue, lb, ub) => {
    if (lb <= ub) {
      // calculate the mid index
      let mid = Math.floor((lb + ub) / 2);

      if (array[mid] === targetValue) return mid;
      else if (targetValue < array[mid])
        return binarySearch(array, targetValue, lb, mid - 1);
      else return binarySearch(array, targetValue, mid + 1, ub);
    } else {
      return -1;
    }
  };

  //   Call Search Function and Show Final Result to the User
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let indexNumber = binarySearch(array, targetValue, lowerBound, upperBound);
  if (indexNumber === -1) {
    console.log("Targeted Value Not Found");
  } else {
    console.log(
      `Targeted Value Found at Index: ${indexNumber} & Position ${
        indexNumber + 1
      }`
    );
  }
};

// const array = [3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32];
// binarySearchWithRecursion(array, 16);

// Binary Search With Loop
const binarySearch = (array, targetValue) => {
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let found = false;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    if (array[mid] === targetValue) {
      console.log(
        `Targeted Value Found at Index: ${mid} & Position ${mid + 1}`
      );
      found = true;
      break;
    } else if (targetValue < array[mid]) {
      upperBound = mid - 1;
    } else {
      lowerBound = mid + 1;
    }
  }
  if (!found) {
    console.log("Targeted Value Not Found");
  }
};

const array = [3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32];
binarySearch(array, 16);

module.exports = binarySearch;
