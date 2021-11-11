import "./style.css";
import { loadHomePage } from "./pages/HomePage";
import { loadMenuPage } from "./pages/MenuPage";
import { loadContactPage } from "./pages/ContactPage";

loadHomePage();
loadMenuPage();
loadContactPage();

const homePageButton = document.getElementById("home-button");
const menuPageButton = document.getElementById("menu-button");
const contactPageButton = document.getElementById("contact-button");

const homePage = document.getElementsByClassName("home-page")[0];
const menuPage = document.getElementsByClassName("menu-page")[0];
const contactPage = document.getElementsByClassName("contact-page")[0];

homePageButton.addEventListener("click", () => {
  if (homePageButton === document.activeElement) {
    homePageButton.classList.add("header-button-clicked");
    menuPageButton.classList.remove("header-button-clicked");
    contactPageButton.classList.remove("header-button-clicked");

    homePage.classList.remove("hide-page");
    menuPage.classList.add("hide-page");
    contactPage.classList.add("hide-page");
  }
});

menuPageButton.addEventListener("click", () => {
  if (menuPageButton === document.activeElement) {
    homePageButton.classList.remove("header-button-clicked");
    menuPageButton.classList.add("header-button-clicked");
    contactPageButton.classList.remove("header-button-clicked");

    homePage.classList.add("hide-page");
    menuPage.classList.remove("hide-page");
    contactPage.classList.add("hide-page");
  }
});

contactPageButton.addEventListener("click", () => {
  if (contactPageButton === document.activeElement) {
    homePageButton.classList.remove("header-button-clicked");
    menuPageButton.classList.remove("header-button-clicked");
    contactPageButton.classList.add("header-button-clicked");

    homePage.classList.add("hide-page");
    menuPage.classList.add("hide-page");
    contactPage.classList.remove("hide-page");
  }
});
