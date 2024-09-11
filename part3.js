const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".questin");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn"):
const secondQuestion = document.querySelector(".question")[1];

yesBtn.addEventListener("click"), ( ) => {
    question.innerHTML = "Aaaaaa, Love u wenggg";
    gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener(mouseover, ()) =>  {
    const noBtnReact = noBtn.getBoundingClientRect( );
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = math.floor(math.random () * maxX);
    const randomY = math.floor(math.random () * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.right = randomY + "px";  
});

