const alphabet = 'ABDEFGHIJKLMNOPRSŠZŽTUVÕÄÖÜ'.split('');
const word = 'AMETIKOOL'.split('');
let guess = [...Array(word.length).keys()].map(i => '_');

const wordDiv = document.getElementById('word');

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute('id', 'letter_' + i);
    letterDiv.innerText = guess[i];
    wordDiv.appendChild(letterDiv);
}

document.addEventListener('keyup', e => {
    const g = e.key.toUpperCase();
    if ( alphabet.includes(g) ) {
        if ( word.includes(g) ) {
            for ( let i in word) {
                if ( word[i] == g ) {
                    const letterDiv = document.getElementById('letter_' + i);
                    letterDiv.innerText = g;
                }
            }
        }
    }
});

