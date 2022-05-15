function startTime() {
    var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();

    //update clock
    var t = setTimeout(startTime, 500);


    if (h < 6 || h > 20) {
        document.getElementById('greeting').innerHTML = 'Good Night!';

    } else if (5 < h < 21) {
        document.getElementById('greeting').innerHTML = 'Good Day!';

    }
}

//add 0
function checkTime(num) {
    if (num < 10) { num = "0" + num };
    return num;
}

function hideSpaceBtn() {
    document.getElementById("button2").style.display = "none";
}

hideSpaceBtn();

function earthTheme() {

    document.body.style.backgroundImage = "url(../images/4.jpeg)"
    container.style.background = '#61482d';
    container.style.opacity = 0.8;
    btnSpace.style.background = '#8a6741'

    document.getElementById("button").style.display = "none";
    document.getElementById("button2").style.display = "block";

}

function refreshPage() {
    window.location.reload();
}