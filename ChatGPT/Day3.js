let movies = ["The Saw", "Dead Silence", "Oculous", "The Hord", "30days Night"];

movies.push("Blood book"); // add a new element to the end
movies.pop(); // remove the last element

movies.unshift("Conjuring"); // add to the start

const firstMovie = movies.shift(); // remove from the start

const sliceMovies = movies.slice(0, 3); // get a copy of the first 3 elements

console.log(typeof firstMovie); // string
console.log(sliceMovies); // first 3 movies
console.log(movies[2]); // log the 3rd movie in the current array
