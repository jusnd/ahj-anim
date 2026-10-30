import "./css/style.css";
import Collapse from "./js/Collapse";
import CallbackChat from "./js/CallbackChat";
import Liker from "./js/Liker";

document.addEventListener("DOMContentLoaded", () => {
  const collapse = new Collapse(document.querySelector(".collapse"));
  collapse.init();

  const chat = new CallbackChat(document.getElementById("callback-chat"));
  chat.init();

  const liker = new Liker(document.querySelector(".liker"));
  liker.init();
});
