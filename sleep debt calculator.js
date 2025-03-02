const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 10;
      break;
    case "thursday":
      return 10;
      break;
    case "friday":
      return 10;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 4;
      break;
    default:
      return "Error!";
  }
};

// console.log(getSleepHours('tuesday'));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
// console.log(getIdealSleepHpurs('monday'));

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("user got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "user got " +
        (actualSleepHours - idealSleepHours) +
        " " +
        " hours more sleep than needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "user should get some rest because user slept " +
        (idealSleepHours - actualSleepHours) +
        " " +
        "hours less."
    );
  } else {
    console.log("Something went wrong!");
  }
};
calculateSleepDebt();
