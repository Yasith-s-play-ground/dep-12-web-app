// const ballElm = document.getElementById('ball');
for (let i = 0; i < 50; i++) {


    /* create div dynamically */
    const ballElm = document.createElement('div');
    ballElm.classList.add('ball-element');

    /* generate random colour */
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    ballElm.style.backgroundColor = `rgb(${r},${g},${b})`;

    ballElm.style.position = 'absolute';

    /* set random border radius to change shape */
    ballElm.style.borderRadius = `${Math.random() * 100}%`

    /* random size */
    let size = 20 + 50 * Math.random();
    ballElm.style.height = size + 'px';
    ballElm.style.width = size + 'px';

    /* random start position*/
// let x = Math.random() * innerWidth - ballElm.offsetWidth;
    let x = Math.random() * innerWidth - size;
// let y = Math.random() * innerHeight - ballElm.offsetHeight;
    let y = Math.random() * innerHeight - size;

    ballElm.style.left = x < 0 ? 0 : x > innerWidth ? innerWidth : x + 'px';
    ballElm.style.top = y < 0 ? 0 : y > innerHeight ? innerHeight : y + 'px';

    /*setting last position*/
    let lastX = x;
    let lastY = y;

    /*random speed*/
    let xSpeed = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);
    let ySpeed = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);

    /* transform the particle ( rotate while moving ) */
    ballElm.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.append(ballElm);

    setInterval(function () {
        /* catching screen edges */
        xSpeed = ((lastX + xSpeed + size) > innerWidth) || ((lastX + xSpeed) < 0) ? -xSpeed : xSpeed;
        ySpeed = ((lastY + ySpeed + size) > innerHeight) || ((lastY + ySpeed) < 0) ? -ySpeed : ySpeed;

        /* setting new position */
        x = lastX + xSpeed;
        y = lastY + ySpeed;
        ballElm.style.left = x + 'px';
        ballElm.style.top = y + 'px';

        /* modifying last position */
        lastX = x;
        lastY = y;
    }, 20);

}



