const cursorDivElm = document.getElementById('cursor-div');
let prevX = cursorDivElm.style.left;
let prevY = cursorDivElm.style.top;

const shadowColours = ['red', 'green', 'blue'];
let shadowColourIndex = 0;

document.body.addEventListener('mousemove', (event) => {
    cursorDivElm.style.display = 'block';
    cursorDivElm.style.left = event.pageX - cursorDivElm.offsetWidth / 2 + 'px';
    cursorDivElm.style.top = event.pageY - cursorDivElm.offsetHeight / 2 + 'px';

    /*when cursor move out of browser*//*check this*/
    if (cursorDivElm.style.top <= 0 || cursorDivElm.style.left <= 0 || cursorDivElm.style.right >= innerWidth || cursorDivElm.style.bottom >= innerHeight) {
        cursorDivElm.style.display = 'none';
    } else {
        cursorDivElm.style.display = 'block';
    }
});

setInterval(function () {
    if (cursorDivElm.style.left === prevX && cursorDivElm.style.top === prevY) {
        cursorDivElm.style.display = 'none';
    }
    prevX = cursorDivElm.style.left;
    prevY = cursorDivElm.style.top;
}, 3000);

/* change colour of box shadow*/
setInterval(function () {
    cursorDivElm.style.boxShadow = `0px 0px 12px 8px ${shadowColours[shadowColourIndex++]}`;
    if (shadowColourIndex === shadowColours.length) {
        shadowColourIndex = 0;
    }
}, 400);