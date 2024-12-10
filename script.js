const themeModePicture = document.getElementById('themeModePicture');
const darkmodeInfoText = document.getElementById('darkmodeInfoText');

themeModePicture.addEventListener('click', () => {
    const darkmode = localStorage.getItem('darkmode');

    if (darkmode === 'true') {
        disableDarkmode()
    } else {
        enableDarkmode()
    }
});

function disableDarkmode() {
    localStorage.setItem('darkmode', false);

    restartAnimation(themeModePicture);
}

function enableDarkmode() {
    localStorage.setItem('darkmode', true);

    restartAnimation(themeModePicture);
}

window.onload = function() {
    const darkmode = localStorage.getItem('darkmode');

    if (darkmode == 'true') {
        enableDarkmode()
    } else {
        disableDarkmode()
    }
}

function restartAnimation(element) {
    const darkmode = localStorage.getItem('darkmode');
    element.style.animation = 'none'; // Animation entfernen
    requestAnimationFrame(() => {
        if (darkmode == 'true') {
            element.style.animation = 'rotate 1s';
            setTimeout(() => {
                element.src = 'img/light_mode.png';
                document.body.classList.add('darkmode');
                darkmodeInfoText.textContent = 'Lightmode';
                element.style.animation = 'rotateReverse 1s';
            }, 1000);
        } else {
            element.style.animation = 'rotate 1s';
            setTimeout(() => {
                element.src = 'img/dark_mode.png';
                document.body.classList.remove('darkmode');
                darkmodeInfoText.textContent = 'Darkmode';
                element.style.animation = 'rotateReverse 1s';
            }, 1000);
        }
    });
}

const arrowBackImg = document.getElementById('arrowBackImg');

arrowBackImg.addEventListener('click', () => {
    window.location.href= 'index.html';
});