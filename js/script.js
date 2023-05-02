//DashBoard
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
  let sidebar = document
    .querySelector(".container")
    .classList.toggle("show-menu");
});


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




