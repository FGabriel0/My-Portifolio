//DashBoard
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
  let sidebar = document
    .querySelector(".container")
    .classList.toggle("show-menu");
});


//DarkMode
const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change",() => {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});


//ReavelPage
function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) =>{
    let windowHeight = window.innerHeight;
    let elementTop =reveal.getBoundingClientRect().top;
    let elementvisible = 100;

    if(elementTop < windowHeight - elementvisible){
      reveal.classList.add("active");
  
    }else{
      reveal.classList.remove("active");
    }
  })
}

window.addEventListener("scroll", reveal);




