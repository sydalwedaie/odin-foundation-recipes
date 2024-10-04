const pageTitle = document.querySelector("title").innerHTML;
const sidebarLinks = document.getElementsByClassName("sidebar-link");

for (let i = 0; i < sidebarLinks.length; i++) {
  if (sidebarLinks[i].id === pageTitle.toLowerCase().split(" ").join("-")) {
    sidebarLinks[i].classList.add("active");
  }
}
