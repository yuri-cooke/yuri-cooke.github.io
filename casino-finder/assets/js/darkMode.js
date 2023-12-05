
function toggleMode() {
    const stylesheet = document.getElementById('stylesheet');

    if (stylesheet.getAttribute('href') === 'assets/css/light-mode.css') {
        stylesheet.setAttribute('href', 'assets/css/dark-mode.css');
    } else {
        stylesheet.setAttribute('href', 'assets/css/light-mode.css');
    }

    console.log(stylesheet)
}

