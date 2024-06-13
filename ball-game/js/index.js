const ballElm = document.getElementById('ball');

/* random size */
let size = 20 + 50 * Math.random();
ballElm.style.height = size + 'px';
ballElm.style.width = size + 'px';

/* random start position*/
let x = Math.random() * innerWidth - ballElm.offsetWidth;
let y = Math.random() * innerHeight - ballElm.offsetHeight;

ballElm.style.left = x < 0 ? 0 : x > innerWidth ? innerWidth : x + 'px';
ballElm.style.top = y < 0 ? 0 : y > innerHeight ? innerHeight : y + 'px';

/*setting last position*/
let lastX = x;
let lastY = y;

/*random speed*/
let xSpeed = Math.random() * 10;
let ySpeed = Math.random() * 10;

setInterval(function () {
    /* catching screen edges */
    xSpeed = ((lastX + xSpeed + ballElm.offsetWidth) > innerWidth) || ((lastX + xSpeed) < 0) ? xSpeed * -1 : xSpeed;
    ySpeed = ((lastY + ySpeed + ballElm.offsetHeight) > innerHeight) || ((lastY + ySpeed) < 0) ? ySpeed * -1 : ySpeed;

    /* setting new position */
    x = lastX + xSpeed;
    y = lastY + ySpeed;
    ballElm.style.left = x + 'px';
    ballElm.style.top = y + 'px';

    /* modifying last position */
    lastX = x;
    lastY = y;
}, 50);





