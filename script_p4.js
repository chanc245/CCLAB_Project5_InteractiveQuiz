let likeColor;

document.addEventListener("DOMContentLoaded", () => {
  const message_p4 = document.getElementById("p5_message");

  const urlParams = new URLSearchParams(window.location.search);
  const response_p4 = urlParams.get("response");

  if (response_p4 === "red") {
    message_p4.innerText = "red apple 🍎";
    likeColor = "red";
  } else if (response_p4 === "orange") {
    message_p4.innerText = "orange orange 🍊";
    likeColor = "orange";
  } else if (response_p4 === "yellow") {
    message_p4.innerText = "yellow sun 🔆";
    likeColor = "yellow";
  } else if (response_p4 === "green") {
    message_p4.innerText = "green grass 🌱";
    likeColor = "green";
  } else if (response_p4 === "blue") {
    message_p4.innerText = "blue ocean 🌊";
    likeColor = "blue";
  } else if (response_p4 === "purple") {
    message_p4.innerText = "purple grape 🍇 ";
    likeColor = "purple";
  }

  localStorage.setItem('color', likeColor);
});