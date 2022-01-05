"use strict";

let numberOfFiles;

//start();

const personalMoviesDB = {
    count: +numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();
showMyDB(personalMoviesDB.privat);

function start() {
    numberOfFiles = +prompt("How many movies you have already watched?", "");
    while (numberOfFiles == '' || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt("How many movies you have already watched?", "");
    }
    console.log(numberOfFiles);
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`${i+1}) Last movie you've watched?`, "");
        const b = prompt(`${i+1}) Rate this movie`, "");
        if (a != null && b != null && a.length < 50) {
            console.log('done');
            personalMoviesDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }

    /*
        let i = 0;
        do {
            const a = prompt("last movie you've watched?", "");
            const b = prompt("rate this movie", "");
            if (a == null || b == null) {
                continue;
            } else if (a.length > 10) {
                continue;
            } else {
                i++;
                personalMoviesDB.movies[a] = b;
            }
        } while (i < 2);
    */

}

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('надто мало дивишся фільмів');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log('ви класичний глядач фільмів');
    } else if (personalMoviesDB.count >= 30) {
        console.log('ви кіноман');
    } else {
        console.log('error');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const favGenres = prompt(`Write genre that is on ${i+1} in your top`, "");
        if (favGenres != null && favGenres.length < 50) {
            console.log('done');
            personalMoviesDB.genres[i] = favGenres;
        } else {
            console.log('error');
            i--;
        }
    }

}

function showMyDB(hidden) {
    if (hidden) {
        console.log(personalMoviesDB);
    } 
}