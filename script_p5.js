// let likeFlower = {};

// document.addEventListener("DOMContentLoaded", () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const response_p6 = urlParams.get("response");

//   if (response_p6 === "yes") {
//     likeFlower.flower = "true";
//   } else if (response_p6 === "no") {
//     likeFlower.flower = "false";
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const message_p3 = document.getElementById("p6_message");

  const urlParams = new URLSearchParams(window.location.search);
  const response_p3 = urlParams.get("response");

  if (response_p3 === "yes") {
    message_p3.innerText = "NICE :D Here's some flower you can drag around with!";
    // likeAnimal = "dog";
  } else if (response_p3 === "no") {
    message_p3.innerText = "oh no ;-; I guess you can still play with some flowers..";
    // likeAnimal = "cat";
  }
});