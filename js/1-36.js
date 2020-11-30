function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  const lower = message.toLowerCase();
  result = lower.includes('spam') || lower.includes('sale');

  // Пиши код выше этой строки
  return result;
}

checkForSpam('Latest technology news'); // возвращает false.
checkForSpam('JavaScript weekly newsletter'); // возвращает false.
checkForSpam('Get best sale offers now!'); // возвращает true.
checkForSpam('Amazing SalE, only tonight!'); // возвращает true.
checkForSpam('Trust me, this is not a spam message'); // возвращает true.
checkForSpam('Get rid of sPaM emails. Our book in on sale!'); // возвращает true.
checkForSpam('[SPAM] How to earn fast money?'); // возвращает true.

// Функция checkForSpam(message) принимает строку(параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки.
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.
