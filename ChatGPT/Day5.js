const grade = (num) => {
  let gradeA = 90;
  let gradeB = 80;
  let gradeC = 70;
  let text;

  //   if (num >= gradeA) {
  //     text = "Congratulation To you YOur grade is A";
  //   } else if (num < gradeA && num >= gradeB) {
  //     text = "Good! YOu have a Grade B";
  //   } else if (num < gradeB && num >= gradeC) {
  //     text = "YOu have a grade c";
  //   } else {
  //     text = "You are D grade";
  //   }

  switch (true) {
    case num >= gradeA:
      text = "Congratulation Grade A";
      break;
    case num >= gradeB:
      text = "Good with Grade B";
      break;
    case num >= gradeC:
      text = "You r pass with grade c";
      break;
    default:
      text = "Grade D";
      break;
  }
  return text;
};

console.log(grade(100));
