const criptoBtn = document.querySelector('#criptoBtn');
const descriptoBtn = document.querySelector('#descriptoBtn');

const listLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '.', ',' ,' '];

let newText = '';

criptoBtn.addEventListener('click', () => {
    const word = document.querySelector('#word');

    for(let letter of word.value){
        letter = letter.toLowerCase();
        if(!listLetters.includes(letter)){
            continue;
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = 3*(indexLetter) + 5;

        if(indexNewLetter > 28){
            indexNewLetter -= 29;
        }

        newText += listLetters[indexNewLetter];
    }
    showResult(newText, 'criptografada');
    clearTextArea();
    newText = '';
});

descriptoBtn.addEventListener('click', () => {
    const word = document.querySelector('#word');

    for(let letter of word.value){
        letter = letter.toLowerCase();
        if(!listLetters.includes(letter)){
            continue;
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = (indexLetter - 5)/3; //indexLetter trocar pelo valor armazenado naquela posição da criptografia

        if(indexNewLetter < 0){
            indexNewLetter += 29;
        }

        newText += listLetters[indexNewLetter];
        word.value = newText;
    }
    showResult(newText, 'descriptografada');
    clearTextArea();
    newText = '';
});

const showResult = (result, method) => {
    return document.getElementById('results').innerHTML = `
  <div id="p-group">
    <p>Sua palavra foi ${method}:</p>
    <p >${result}</p>
  </div>`;
}

const clearTextArea = () => { 
    document.getElementById('word').value = '';
};
