// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const image = document.getElementById("imgImprovise");
const popUp = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (scrollY > lastScroll) {
    navbar.style.height = "45px";
  } else if (scrollY < 1) {
    navbar.style.height = "90px";
  }

  lastScroll = scrollY;
});

window.addEventListener("scroll", () => {
  if (scrollY > 350) {
    image.style.transform = "translateX(0px)";
    image.style.opacity = 1;
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 1350) {
    popUp.style.transform = "translateX(0px)";
    popUp.style.opacity = 1;
  }
});

window.addEventListener("click", () => {
  if (closeBtn) popUp.style.opacity = 0;
});
