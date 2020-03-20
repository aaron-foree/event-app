let ball = document.getElementById("Ball");
let container = document.getElementById("container");

container.addEventListener("click", moveBall);
center.addEventListener("mouseover", centerBall);
window.addEventListener("keypress", findBall);

function findBall(event){
    if (event.key === "f"){
    var x = ball.style.left
    var y = ball.style.top
    ballcoords.textContent = x + ", " + y;
}
}

function moveBall(event) {
    let xPosition = event.clientX - container.getBoundingClientRect().left - (ball.clientWidth / 2);
    let yPosition = event.clientY - container.getBoundingClientRect().top - (ball.clientHeight / 2);
    ball.style.left = xPosition + "px";
    ball.style.top = yPosition + "px";
}
function centerBall(event){
   ball.style.left = 200 + "px";
   ball.style.top = 200 + "px";
}

