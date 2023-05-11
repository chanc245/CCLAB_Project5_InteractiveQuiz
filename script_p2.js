document.addEventListener("DOMContentLoaded", () => {
  const message_p2 = document.getElementById("p3_message");

  const urlParams = new URLSearchParams(window.location.search);
  const response_p2 = urlParams.get("response");

  if (response_p2 === "good") {
    message_p2.innerText = "That's fantastic to hear C:";
  } else if (response_p2 === "bad") {
    message_p2.innerText = "Oh no! I'm sorry that you are not having a good day :c";
  }
});