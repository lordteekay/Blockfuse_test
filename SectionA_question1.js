//Finding the median of Two sorted arrrays
function median(array_1, array_2) {
  // Arrays can be concatenated just like strings using the concat method
  const merged_Array = array_1.concat(array_2);

  // Sorting the merging array
  merged_Array.sort(function (a, b) {
    return a - b;
  });
  console.log(merged_Array);

  // Finding the average number

  const mid = Math.floor(merged_Array.length / 2);
  console.log(mid);
}

const array_1 = [76, 57, 19, 87, 62, 23, 87];
const array_2 = [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11];
median(array_1, array_2);
