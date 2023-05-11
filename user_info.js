document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form fields
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var animal = document.getElementById("animal").value;
  var color = document.getElementById("color").value;
  var weather = document.getElementById("weather").value;
  var season = document.getElementById("season").value;
  var flower = document.querySelector('input[name="flower"]:checked').value;

  // Create a JSON object with the user information
  var user = {
    name: name,
    dob: dob,
    animal: animal,
    color: color,
    weather: weather,
    season: season,
    flower: flower
  };

  // Convert the JSON object to a string
  var jsonString = JSON.stringify(user);

  // Save the string to a file using AJAX
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "save.php", true
