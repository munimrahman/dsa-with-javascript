const linearSearch = (array, targetValue) => {
  let flag = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      console.log(`Targeted value found at index ${i} & position ${i + 1}`);
      flag = 1;
    }
  }
  if (!flag) {
    console.log(`Value not found at index`);
  }
};

module.exports = linearSearch;
