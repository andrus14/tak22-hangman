const alphabet = 'ABCDEFGHIJKLMNOPQRSŠZŽTUVWÕÄÖÜXY'.split('');

const url = 'words.txt';
fetch(url)
.then((response) => response.text())
.then( text => {

    const lines = text.split('\n');
    const word = lines[Math.floor(Math.random()*lines.length)].toUpperCase().split('');

    let guess = [...Array(word.length).keys()].map(i => '_');
    let score = 10;
    let wrongGuesses = [];
    
    
    const wordDiv = document.getElementById('word');
    const alphabetDiv = document.getElementById('alphabet');
    
    for ( let i in guess ) {
        const letterDiv = document.createElement('div');
        letterDiv.setAttribute('id', 'letter_' + i);
        letterDiv.innerText = guess[i];
        wordDiv.appendChild(letterDiv);
    }
    
    for ( let i in alphabet ) {
        const aDiv = document.createElement('div');
        aDiv.setAttribute('id', alphabet[i]);
        aDiv.innerText = alphabet[i];
        alphabetDiv.appendChild(aDiv);
    }
    
    
    document.addEventListener('keyup', e => {
    
        if ( score ) {
            const g = e.key.toUpperCase();
            if ( alphabet.includes(g) ) {
                if ( word.includes(g) ) {
                    for ( let i in word) {
                        if ( word[i] == g ) {
                            const letterDiv = document.getElementById('letter_' + i);
                            letterDiv.innerText = g;
                        }
                    }
                } else {
                    if ( !wrongGuesses.includes(g) ) {
                        wrongGuesses.push(g);
                        score--;
                        
                        const scoreImg = document.querySelector('#score img');
                        scoreImg.setAttribute('src', 'img/' + score + '.png');
                    }
                }
        
                const aDiv = document.getElementById(g);
                aDiv.classList.add('grayed-out');
            }
        }
    
    });
});
