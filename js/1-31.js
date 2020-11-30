function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let result;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      result = i;
      break;
    }
  }
  return result;
  // Пиши код выше этой строки
}
