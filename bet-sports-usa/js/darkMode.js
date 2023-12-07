
function toggleMode() {
    const stylesheet = document.getElementById('stylesheet');

    if (stylesheet.getAttribute('href') === 'css/light-mode.css') {
        stylesheet.setAttribute('href', 'css/dark-mode.css');
    } else {
        stylesheet.setAttribute('href', 'css/light-mode.css');
    }

    console.log(stylesheet)
}

