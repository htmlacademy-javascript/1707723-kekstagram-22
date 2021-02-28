const getRandomIntegerFromRange = (min, max) => {
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

const isNotLongerThan = (string, maxLength) => (string+'').length <= maxLength

isNotLongerThan(5,5);

export {getRandomIntegerFromRange, isNotLongerThan};
