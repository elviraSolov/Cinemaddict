import {getRandomInteger, getRandomValue} from '../util.js';

const FILM_COUNT = 10;
const MAX_COMMENTS_ON_FILM = 5;

const generateFilm = () => ({
  title: getRandomValue(titles),
  alternativeTitle: getRandomValue(titles),
  totalRating: 5.3,
  poster: "images/posters/the-great-flamarion.jpg",
  ageRating: "16+",
  director: "Tom Ford",
  writers: [
    "Takeshki Kitano",
    "writer"
  ],
  actors: [
    "Morgan Freeman"
  ],
  release: {
    date: "2019-05-11T00:00:00.000Z",
    releaseCountry: "Finland"
  },
  runtime: 77,
  genre: [
    "Comedy"
  ],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra."
});

const titles = [
  'Country On Him',
  'Raiders With The Carpet',
  'Guest Who Sold The Darkness',
  'Made For Each Other'
];

const generateFilms = () => {
  const films = Array.from({length: FILM_COUNT}, generateFilm);

  let totalCommentsCount = 0; // Ключ для id комментария

  return films.map((film, index) => {
    const hasComments = getRandomInteger(0, 1);

    const filmCommentsCount = (hasComments)
      ? getRandomInteger(1, MAX_COMMENTS_ON_FILM)
      : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(index + 1),
      comments: (hasComments)
        ? Array.from(
        {length: filmCommentsCount},
        (_value, commentIndex) => String(totalCommentsCount - commentIndex)
      )
      : [],
      filmInfo: film,
    };
  });
};

export {generateFilms};
