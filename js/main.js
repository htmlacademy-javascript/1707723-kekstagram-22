const getRandomIntegerFromRange = function(min, max) {
  // Учтите, что диапазон может быть только положительный, включая ноль.
  // А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
  if (max < 0 || min < 0) {
    return undefined;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    return undefined;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const isNotLongerThan = (string, maxLength) => (string+'').length <= maxLength ? true : false;


