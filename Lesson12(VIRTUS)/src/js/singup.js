//open/close form
showBlock.onclick = function show() {
    display = document.getElementById('window').style.display;
    if (display == 'none') {
        document.getElementById('window').style.display = 'block';
    }
}

showNone.onclick = function hidden() {
    display = document.getElementById('window').style.display;
    if (display == 'block') {
        document.getElementById('window').style.display = 'none';
    }
}