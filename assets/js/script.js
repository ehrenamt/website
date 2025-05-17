const burgerToggle = document.getElementById("burgerToggle");
const languageToggle = document.getElementById("languageToggle");
const fullscreenMenu = document.getElementById("mainMenu");
const menuList = document.getElementById("mainMenuList");

const languageMenu = document.getElementById("languageMenu");

// Toggle buttons
burgerToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("menu-open");
  document.body.classList.remove("language-open"); // close other menu
});

languageToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("language-open");
  document.body.classList.remove("menu-open"); // close other menu
});

// Close on outside click
document.addEventListener("click", (e) => {
  const isLanguageClick =
    languageToggle.contains(e.target) || menuList.contains(e.target);
  const isBurgerClick =
    burgerToggle.contains(e.target) || fullscreenMenu.contains(e.target);

  if (!isLanguageClick) {
    document.body.classList.remove("language-open");
  }
  if (!isBurgerClick) {
    document.body.classList.remove("menu-open");
  }
});
