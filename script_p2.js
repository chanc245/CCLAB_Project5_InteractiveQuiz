document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");

  const urlParams = new URLSearchParams(window.location.search);
  const response = urlParams.get("response");

  if (response === "good") {
    message.innerText = "That's fantastic to hear C:";
  } else if (response === "bad") {
    message.innerText = "Oh no! I'm sorry that you are not having a good day :c";
  }
});
