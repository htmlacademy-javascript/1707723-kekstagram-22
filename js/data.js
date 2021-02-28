import {getRandomIntegerFromRange} from './util'

const NUMBER_OF_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_ID = 1000;
const MAX_ID = 10000;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 10;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const makeRandomMessage = () => {
  let message = '';
  let randomIndex = getRandomIntegerFromRange(0, MESSAGES.length-1);

  message+= MESSAGES[randomIndex];

  if  (getRandomIntegerFromRange(0,1)) {
    let nextRandomIndex = getRandomIntegerFromRange(0, MESSAGES.length-2);
    if (nextRandomIndex === randomIndex){
      nextRandomIndex++;
    }
    message+= '\n' + MESSAGES[nextRandomIndex];

  }
  return message;
}


const NAMES = [
  'Артем',
  'Ололош',
  'Азазаш',
  'Лупа',
  'Пупа',
]

const getRandomName = () => NAMES[getRandomIntegerFromRange(0, NAMES.length-1)]

const uniqueIds = [];

const makeUniqueId = () => {
  let randomId = getRandomIntegerFromRange(MIN_ID, MAX_ID);
  if (uniqueIds.some(value => value === randomId )) {
    makeUniqueId();
  }
  uniqueIds.push(randomId);
  return randomId;
}

const getRandomComments = (numberOfComments) => {
  let comments = [];
  for (let i = 0; i <= numberOfComments; i++) {
    let comment = {
      id: makeUniqueId(),
      avatar: `img/avatar-${getRandomIntegerFromRange(1, 6)}.svg`,
      message: makeRandomMessage(),
      name: getRandomName(),
    }
    comments.push(comment);
  }
  return comments;
}


const makePhotos = () => {
  let photos = [];
  for (let i = 1; i <= NUMBER_OF_PHOTOS; i++) {
    let photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фото номер ${i}`,
      likes: getRandomIntegerFromRange(MIN_LIKES, MAX_LIKES),
      comments: getRandomComments(getRandomIntegerFromRange(MIN_COMMENTS, MAX_COMMENTS)),
    };
    photos.push(photo);
  }
  return photos;
}

export default makePhotos;
