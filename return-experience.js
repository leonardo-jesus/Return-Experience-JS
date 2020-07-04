function experience(years) {
  switch (true) {
    case years >= 0 && years <= 1:
      console.log("Starter");
      break;

    case years > 1 && years <= 3:
      console.log("Intermediate");
      break;

    case years > 3 && years <= 6:
      console.log("Advanced");
      break;

    case years > 6:
      console.log("Jedi Master");
      break;
  }
}

var yearsStudy = 7;
experience(yearsStudy);