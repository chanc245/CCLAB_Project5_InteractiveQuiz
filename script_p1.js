function getDate() {
  var dateInput = document.getElementById("date-input");
  var userBirthDate = dateInput.value;
  console.log(userBirthDate);

  var daysUntilBirthday = calculateDaysUntilBirthday(userBirthDate);
  console.log("Days until your next birthday: " + daysUntilBirthday);

  var nameInput = document.getElementById("name-input");
  var userName = nameInput.value;

  // return { userName, daysUntilBirthday };
  localStorage.setItem('name', userName);
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

  // return daysUntilBirthday;

  localStorage.setItem('daysUntilBirthday', daysUntilBirthday);
}

// console.log(userName)

document.addEventListener("DOMContentLoaded", () => {
  const message_p2 = document.getElementById("p2_message");

  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");
  const daysUntilBirthday = urlParams.get("daysUntilBirthday");

  message_p2.innerText = "Hey " + localStorage.getItem("name") + "! Your birthday is going to be in " + localStorage.getItem("daysUntilBirthday") + " days :D";
});
