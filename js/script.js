let hamburguer=document.querySelector(".hamburguer");hamburguer.addEventListener("click",()=>{document.querySelector(".container").classList.toggle("show-menu")});const changeThemeBtn=document.querySelector("#change-theme");function toggleDarkMode(){document.body.classList.toggle("dark")}function loadTheme(){const a=localStorage.getItem("dark");a&&toggleDarkMode()}loadTheme(),changeThemeBtn.addEventListener("change",()=>{toggleDarkMode(),localStorage.removeItem("dark"),document.body.classList.contains("dark")&&localStorage.setItem("dark",1)});function reveal(){let a=document.querySelectorAll(".reveal");a.forEach(a=>{let b=window.innerHeight,c=a.getBoundingClientRect().top;c<b-100?a.classList.add("active"):a.classList.remove("active")})}window.addEventListener("scroll",reveal);