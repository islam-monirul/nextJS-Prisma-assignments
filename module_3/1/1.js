function getDayOfTheWeek(inputDate) {
  const givenDate = new Date(inputDate);
  return givenDate.getDay();
}

const dt = new Date();
const splitParts = dt.toISOString().split("T");
const dayNumber = getDayOfTheWeek(splitParts[0]);

console.log(dayNumber);
