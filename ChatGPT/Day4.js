const myObj = {
  name: "Haseeb",
  age: 27,
  "Full name": "Abdul Haseeb",
  hobbies: ["reading", "gaming", "coding"],
  address: {
    city: "Peshawar",
    country: "Pakistan",
    job: "Coding",
    region: "Asia",
  },
};
console.log(myObj.name);
console.log(myObj["Full name"]);

const hobbyStartsWithA = myObj.hobbies.filter((hobby) => {
  return hobby.toLowerCase().startsWith("g");
});

// if (hobbyStartsWithA === 0) {
//   console.log("No hobbies Start With a");
// } else {
//   console.log(hobbyStartsWithA);
// }

const filterHobbiesStartingWithA = (hobbies) => {
  let text;
  const filtered = hobbies.filter((hobby) =>
    hobby.toLowerCase().startsWith("a")
  );
  if (filtered.length === 0) {
    text = "NO hobbies starting with A";
  } else {
    text = filtered;
  }
  return text;
};

const filterHobbiesStartingWithACopy = (hobbies) => {
  const filtered = hobbies.filter((hobby) =>
    hobby.toLowerCase().startsWith("a")
  );

  return filtered.length === 0 ? "No hobbies start with 'a'" : filtered;
};

console.log(filterHobbiesStartingWithA(myObj.hobbies));
console.log(myObj.address["city"]);
