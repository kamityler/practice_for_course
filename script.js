"use strict";


const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("How many movies you have already watched?", "");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("How many movies you have already watched?", "");
        }
        console.log(this.count);
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`${i+1}) Last movie you've watched?`, "");
            const b = prompt(`${i+1}) Rate this movie`, "");
            if (a != null && b != null && a.length < 50) {
                console.log('done');
                this.movies[a] = b;
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
                    this.movies[a] = b;
                }
            } while (i < 2);
        */

    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('надто мало дивишся фільмів');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('ви класичний глядач фільмів');
        } else if (this.count >= 30) {
            console.log('ви кіноман');
        } else {
            console.log('error');
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            let genres = prompt(`Write your favorite genres dividing them with commas`, "").toLowerCase();
            /*
            if (genre === '' || genre == null) {
                console.log("data is uncorrect");
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
            */
            if (genres === '' || genres == null) {
                console.log("data is uncorrect");
                i--;
            } else {
                this.genres = genres.split();
                this.genres.sort();
            }

        }
        this.genres.forEach((item, i) => {
            console.log(`Favourite genre #${i+1} - is ${item}`);
        });
    },
    showMyDB: function () {
        if (this.privat) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }
};

personalMoviesDB.start();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();

personalMoviesDB.toggleVisibleMyDB();
personalMoviesDB.showMyDB();

personalMoviesDB.writeYourGenres();

personalMoviesDB.showMyDB();
