function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  const sum = array1.concat(array2);
  let arr = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array1.includes(sum[i]) && array2.includes(sum[i])) {
      arr.push(sum[i]);
    }
  }
  return arr;
  // Пиши код выше этой строки
}
​
getCommonElements([1, 2, 3], [2, 4]) // возвращает [2].
getCommonElements([1, 2, 3], [2, 1, 17, 19]) // возвращает [1, 2].
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // возвращает [12, 27, 3].
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // возвращает [10, 30, 40].