"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let movieName, movieRating;
let movieComplete = true;

function rememberMyFilms() {
  while (movieComplete === true) {
    (movieName = prompt(
      "Один из последних просмотренных фильмов?",
      "Аватар"
    ).trim()),
      (movieRating = prompt("На сколько оцените его?", "0").trim());

    if (
      movieName != null &&
      movieRating != null &&
      movieRating != "" &&
      movieName != "" &&
      movieName.length < 50
    ) {
      personalMovieDB.movies[movieName] = movieRating;
    } else {
      alert("Не верно заполненная форма");
      continue;
    }

    movieComplete = confirm("Продолжить?");
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

function showMyDB(accaunt) {
  accaunt ? console.log(personalMovieDB) : console.log("Не доступно");
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1} `
    );
  }
}

// showMyDB(personalMovieDB.privat);
// rememberMyFilms();
// detectPersonalLevel();
writeYourGenres();

console.log(personalMovieDB);
