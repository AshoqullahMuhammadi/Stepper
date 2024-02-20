var progressContainer = document.querySelector('.progress-container');
var progress = document.querySelector('.progress');
var circles = document.querySelectorAll('.circle');
var prv = document.getElementById('prv');
var next = document.getElementById('next');

let active = 1;
next.addEventListener('click', function () {
    if (active == 4) {
        return;
    }
    if (active >= 1) {
        prv.style.backgroundColor = "#3498db";
        prv.style.cursor = "pointer";
        prv.disabled = false;
    }
    active++;

    var progressWidth = ((progress.style.width.replace("px", "")) * 1) + 120;
    progress.style.width = `${progressWidth}px`;

    for (var i = 0; i < active; i++) {
        circles[i].classList.add("active");
    }
    if (active == 4) {
        next.style.backgroundColor = "#e0e0e0";
        next.style.cursor = "not-allowed";
        next.disabled = true;
    }
});

prv.addEventListener('click', function () {
    if (active == 1) {
        return;
    }
    if (active <= 4) {
        next.style.backgroundColor = "#3498db";
        next.style.cursor = "pointer";
        next.disabled = false;
    }
    active--;
    var progressWidth = ((progress.style.width.replace("px", "")) * 1) - 120;
    progress.style.width = `${progressWidth}px`;
    for (var i = 3; i >= active; i--) {
        circles[i].classList.remove("active");
    }
    if (active == 1) {
        prv.style.backgroundColor = "#e0e0e0";
        prv.style.cursor = "not-allowed";
        prv.disabled = true;
    }
});
