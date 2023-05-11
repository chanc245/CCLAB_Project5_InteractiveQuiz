let likeFlower = {};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const response_p3 = urlParams.get("response");

  if (response_p3 === "yes") {
    likeFlower.flower = "true";
  } else if (response_p3 === "no") {
    likeFlower.flower = "false";
  }
});