const displayItems = ['Direct Entry Program 12', 'We', 'are', 'born to code'];

const h1Elm = document.getElementById('display-board');
const spanElm = document.getElementById('display-span');
const cursorElm = document.getElementById('cursor');

let index = 0;
let arrayItem;


let letterTmr;

function displayText(index) {
    setInterval(function () {

        spanElm.innerText = "";

        displayWordsLetterByLetter(displayItems[index], 0);

        // setTimeout(function () {
        //     let eraseIndex = displayItems[index].length - 1;
        //     console.log(spanElm.innerText);
        //     let eraseTmr = setInterval(function () {
        //         spanElm.innerText = displayItems[index].substring(0, eraseIndex);
        //         if (eraseIndex-- === 0) clearInterval(eraseTmr);
        //     }, 50);
        // }, 75 * displayItems[index].length);

        if (index++ === displayItems.length - 1) index = 0;
    }, 75 * displayItems[index].length*2);

    //displayText(++index);
}

displayText(0);


function displayWordsLetterByLetter(arrayItem, letterIndex) {
    letterTmr = setInterval(function () {
        spanElm.innerHTML += arrayItem.charAt(letterIndex++);
        if (letterIndex === arrayItem.length) clearInterval(letterTmr);
    }, 75);

    return true;


}


