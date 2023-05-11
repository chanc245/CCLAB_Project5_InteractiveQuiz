document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("p2_yes");
  const noButton = document.getElementById("p2_no");
  const message = document.getElementById("message");

  yesButton.addEventListener("click", () => {
    message.innerText = "That's fantastic to hear C:";
  });

  noButton.addEventListener("click", () => {
    message.innerText = "Oh no! I'm sorry that you are not having a good day :c";
  });
});
