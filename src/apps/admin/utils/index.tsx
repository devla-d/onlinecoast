export const toggleSidebarnav = () => {
  var body = document.getElementsByTagName("body")[0];
  var sidebar = document.getElementById("accordionSidebar") as HTMLElement;

  if (body.classList.contains("sidebar-toggled")) {
    body.classList.remove("sidebar-toggled");
  }
  if (sidebar.classList.contains("toggled")) {
    sidebar.classList.remove("toggled");
  } else {
    body.classList.add("sidebar-toggled");
    sidebar.classList.add("toggled");
  }
};
