// script_p1.js

function getDate() {
  var dateInput = document.getElementById("date-input");
  var userBirthDate = dateInput.value;
  console.log(userBirthDate);

  var daysUntilBirthday = calculateDaysUntilBirthday(userBirthDate);
  console.log("Days until your next birthday: " + daysUntilBirthday);

  var nameInput = document.getElementById("name-input");
  var userName = nameInput.value;

  return { userName, daysUntilBirthday };
}

function calculateDaysUntilBirthday(birthDate) {
  var today = new Date();
  var currentYear = today.getFullYear();
  var birthDateThisYear = new Date(birthDate);
  birthDateThisYear.setFullYear(currentYear);

  if (today > birthDateThisYear) {
    birthDateThisYear.setFullYear(currentYear + 1);
  }

  var timeDiff = birthDateThisYear.getTime() - today.getTime();
  var daysUntilBirthday = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysUntilBirthday;
}

export { getDate };
