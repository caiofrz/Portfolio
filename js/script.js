const date = new Date();
const year = date.getFullYear();



document.getElementById("date").innerText = year;

function responsiveNav() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}
