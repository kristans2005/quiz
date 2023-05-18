const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");


toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if(toggleTheme.checked){
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }else{
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const startTheme = localStorage.getItem("theme");

if(startTheme == "light" || !startTheme){
  html.dataset.theme = "light";
}else{
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}
