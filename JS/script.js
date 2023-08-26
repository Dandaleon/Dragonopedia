"use strict";

let numberOfFilms,
  movieName,
  movieRating,
  movieComplete = true;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function (accaunt) {
    accaunt ? console.log(personalMovieDB) : console.log("Не доступно");
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`
      );

      if (
        typeof personalMovieDB.genres[i] === null ||
        personalMovieDB.genres[i] == ""
      ) {
        i--;
        alert("Вы ввели некорректные данные или оставили поле пустым");
      }
    }
    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function (accaunt) {
    accaunt
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// personalMovieDB.showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);
