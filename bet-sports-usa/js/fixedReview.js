window.onscroll = function() {
    var coverSection = document.querySelector('.cover');
    var fixedSection = document.getElementById('fixed-section');

    var coverSectionOffset = coverSection.offsetTop + coverSection.offsetHeight;

    if (window.pageYOffset > coverSectionOffset) {
        fixedSection.style.display = 'block';
    } else {
        fixedSection.style.display = 'none';
    }
};