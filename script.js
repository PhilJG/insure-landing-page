"use strict";

const toggleBtn = document.querySelector(".toggle__btn");
const closeList = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const burger = document.querySelector(".burger");

toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("hidden");
  closeList.classList.toggle("hidden");
  burger.classList.toggle("hidden");
  console.log("clicked");
});
