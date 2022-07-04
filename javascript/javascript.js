// JS AQUI

var btn = document.getElementById('btn');
var closeX = document.getElementById('closeX');
var modal = document.querySelector('.modalChallenger');

btn.addEventListener("click", function open() {
    btn.classList.add("topBtn" , "mb-2");
    modal.classList.remove("hideModal");
});

closeX.addEventListener("click", function closeX(){
    btn.classList.remove("topBtn" , "mb-2");
    modal.classList.add("hideModal");
});