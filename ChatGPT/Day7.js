// Ask 3 questions and convert the answers to numbers
const question1 = Number(prompt("What is 2 + 2?"));
const question2 = Number(prompt("What is 5 * 5?"));
const question3 = Number(prompt("What is 2 * 2?"));

// Function to handle scoring
const handleAllQuestions = (q1, q2, q3) => {
  let score = 0;

  // Check each answer and add points if correct
  if (q1 === 4) score += 5;
  if (q2 === 25) score += 5;
  if (q3 === 4) score += 5;

  // Print the final score
  console.log(`Your final score is: ${score} out of 15`);
};

// Call the function with the answers
// handleAllQuestions(question1, question2, question3);

const questions = [
  { question: "What is 2 + 2?", answer: 4 },
  { question: "What is 5 * 5?", answer: 25 },
  { question: "What is 2 * 2?", answer: 4 },
];

let score = 0;

questions.forEach((item) => {
  const userAnswer = Number(prompt(item.question));
  if (userAnswer === item.answer) {
    score += 5;
  }
});

console.log(`Your final score is: ${score} out of ${questions.length * 5}`);
