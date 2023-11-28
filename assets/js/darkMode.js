
function toggleMode() {
    const stylesheet = document.getElementById('stylesheet');

    if (stylesheet.getAttribute('href') === 'assets/css/styles.css') {
        stylesheet.setAttribute('href', 'assets/css/styles-dark.css');
    } else {
        stylesheet.setAttribute('href', 'assets/css/styles.css');
    }
}
document.getElementById('mode-toggle').addEventListener('click', toggleMode);
document.getElementById('mode-toggle-mobile').addEventListener('click', toggleMode);