const searchBox = document.querySelector(".searchbox");
const navIcons = document.querySelector(".nav-icons");
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => {
    searchBox.classList.add("active");
    navIcons.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    searchBox.classList.remove("active");
    navIcons.classList.remove("active");
});