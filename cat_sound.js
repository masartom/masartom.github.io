function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.onclick = function () {
    var audio = new Audio("sounds/cat_0" + getRandomInt(6) + ".mp3");
    audio.play();
}

function showAlert() {
    $('#alert').show();
    setTimeout(function () {
        $('#alert').hide();
    }, 5000);
}