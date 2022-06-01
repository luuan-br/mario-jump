const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");
let countScore = 0;

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

const loop = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPostion = Number(
        window.getComputedStyle(mario).bottom.replace("px", "")
    );
    const marioPostionLeft = mario.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPostion < 80) {
        pipe.style.animationPlayState = "paused";

        mario.style.animation = "none";
        mario.style.bottom = `${marioPostion}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        return;
    }

    requestAnimationFrame(loop);
};

loop();

document.addEventListener("keydown", jump);
