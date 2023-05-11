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
    message_p3.innerText = "NICE :D Here are some flowers you can drag around with!";
    // likeAnimal = "dog";
  } else if (response_p3 === "no") {
    message_p3.innerText = "it's alright! You can drag around some flower to get closer to them c:";
    // likeAnimal = "cat";
  }
});