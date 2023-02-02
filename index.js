color = ["green", "red", "yellow", "blue"];
colorpattern = [];
userpattern = [];
let selected;
level = 1;
started = false;

$(document).keypress(function () {
    if (!started) {
        document.querySelector("h1").innerHTML = `level ${level}`
        nextpattern();
        started = true;
    }
});

$(".btn").click(function () {
    userselected = $(this).attr("id");
    userpattern.push(userselected);
    selected = userpattern.length - 1;
    checkAnswer();
});

function checkAnswer() {

    if (userpattern[selected] === colorpattern[selected]) {

        if (userpattern.length === color.length) {
            colorpattern = [];
            userpattern = [];
            level++;
            document.querySelector("h1").innerHTML = `level ${level}`
            nextpattern();
        }
    } else {
        colorpattern = [];
        userpattern = [];
        level = 0;
        document.querySelector("h1").innerHTML = `You Failed last level <br>To Play again <br> PRESS ANY KEY `
        started = false;
    }
}



function nextpattern() {
    document.querySelector("h1").innerHTML = `level ${level}`
    for (i = 0; i < color.length; i++) {
        random = Math.floor(Math.random() * 4);
        choose = color[random];
        colorpattern.push(choose);
        $("#" + choose).fadeIn(100).fadeOut(100).fadeIn(100);

    }
}
