let likeAnimal = "";

document.addEventListener("DOMContentLoaded", () => {
  const message_p3 = document.getElementById("p4_message");

  const urlParams = new URLSearchParams(window.location.search);
  const response_p3 = urlParams.get("response");

  if (response_p3 === "dog") {
    message_p3.innerText = "woof woof!";
    likeAnimal = "dog";
  } else if (response_p3 === "cat") {
    message_p3.innerText = "meow~";
    likeAnimal = "cat";
  }

  localStorage.setItem('animal', likeAnimal);
});



