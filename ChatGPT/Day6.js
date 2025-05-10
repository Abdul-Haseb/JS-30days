const movies = ["Avengers", "Dead silence", "Wrong turn", "Tho hord"];

for (let i = 0; i < movies.length; i++) {
  console.log(i, movies[i]);
}

let i = 0;

while (i < movies.length) {
  console.log(movies[i]);
  i++;
}

for (const movie of movies) {
  console.log("For of", movie);
}

for (const [index, movie] of movies.entries()) {
  console.log(index, movie);
}

const moviesWithA = movies.filter((movie) => {
  return movie.toLowerCase().startsWith("a");
});

const filteredMovies = (array, alphabet) => {
  const filtered = array.filter((movie) =>
    movie.toLowerCase().startsWith(`${alphabet.toLowerCase()}`)
  );

  return filtered.length === 0
    ? `No movies starts with ${alphabet.toUpperCase()}`
    : filtered;
};

console.log(filteredMovies(movies, "A"));
