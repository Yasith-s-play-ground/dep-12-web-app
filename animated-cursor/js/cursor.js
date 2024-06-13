const cursorDivElm = document.getElementById('cursor-div');
let prevX = cursorDivElm.style.left;
let prevY = cursorDivElm.style.top;

const shadowColours = ['red', 'green', 'blue'];

cursorDivElm.classList.add('cursor', 'hide');
// const shadowClasses = ['outer-most-shadow', 'middle-shadow', 'inner-most-shadow'];
// let shadowClassIndex = 0;

let shadowColourIndex = 0;

let tmrId;

document.addEventListener('mousemove', (event) => {
    cursorDivElm.style.opacity = '0.5';
    cursorDivElm.style.display = 'block';
    cursorDivElm.style.left = event.pageX - cursorDivElm.offsetWidth / 2 + 'px';
    cursorDivElm.style.top = event.pageY - cursorDivElm.offsetHeight / 2 + 'px';

    /* clear interval if mouse moved */
    if (tmrId) clearTimeout(tmrId);

    /* remove hide class if mouse is moved */
    if (cursorDivElm.classList.contains('hide')) {
        cursorDivElm.classList.remove('hide');
    }
    tmrId = setTimeout(() => {
        cursorDivElm.classList.add('hide');
    }, 8000);

});

// setInterval(function () {
//     if (cursorDivElm.style.left === prevX && cursorDivElm.style.top === prevY) {
//         /*hide timer*/
//         // let hideTmr = setInterval(function () {
//         //     cursorDivElm.style.opacity = (cursorDivElm.style.opacity / 2) + '%';
//         //     if (parseFloat(cursorDivElm.style.opacity) <= 0) {
//         //         clearInterval(hideTmr);
//         //     }
//         // }, 100);
//
//         cursorDivElm.style.display = 'none';
//     }
//     prevX = cursorDivElm.style.left;
//     prevY = cursorDivElm.style.top;
// }, 3000);

/* change colour of box shadow*/
// setInterval(function () {
//     // cursorDivElm.style.boxShadow = `0px 0px 12px 8px ${shadowColours[shadowColourIndex++]}`;
//     // if (shadowColourIndex === shadowColours.length) {
//     //     shadowColourIndex = 0;
//     // }
//     cursorDivElm.classList.add(shadowClasses[shadowClassIndex++]);
//     if (shadowClassIndex === shadowClasses.length) {
//         shadowClassIndex = 0;
//         cursorDivElm.class = shadowClasses[0];
//     }
//
// }, 100);


document.addEventListener('mouseenter', () => {
    cursorDivElm.classList.remove('hide');
});

document.addEventListener('mouseleave', () => {
    cursorDivElm.classList.add('hide');
});

