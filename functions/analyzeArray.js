function analyzeArray(array) {
  let sum = 0,
    min = array[0],
    max = array[0],
    length = 0;
  array.forEach((element) => {
    min = Math.min(min, element);
    max = Math.max(max, element);
    length++;
    sum += element;
  });
  return {
    average: sum / length,
    min,
    max,
    length,
  };
}
module.exports = analyzeArray;
