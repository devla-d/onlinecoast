export const toggleMobileNav = () => {
  var navBar = document.getElementById("mobileNav") as HTMLElement;
  var toggleIcon = document.getElementById("toggleIcon") as HTMLElement;

  if (navBar.classList.contains("active")) {
    navBar.classList.remove("active");
    toggleIcon.classList.remove("fa-xmark");
    toggleIcon.classList.add("fa-bars");
  } else {
    navBar.classList.add("active");
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-xmark");
  }
};
