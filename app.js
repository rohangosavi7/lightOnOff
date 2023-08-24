let btn = document.querySelector(".btn");
let body = document.body;
let audio = document.querySelector("#audio");
let message = document.querySelector("#message");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  audio.play();
  if (message.textContent === "It's dark in here...") {
    message.textContent = "Much better....!";
  } else {
    message.textContent = "It's dark in here..."; }


});


