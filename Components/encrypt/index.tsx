import styles from "./encrypt.module.scss";

interface CryptProps {
    setCryptedWord: (value: string) => void;
    setCryptedNumbers: (value: number[]) => void;
}

function Encrypt({ setCryptedNumbers, setCryptedWord }: CryptProps) {
    function handleCrypt() {
        const allowedLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.', ',', ' '];
        const inputWord = (document.getElementById('input-field') as HTMLInputElement)?.value;

        let i = '';
        let cryptedOutput: string = '';
        let cryptedNumbers: number[] = [];
        for (i of inputWord) {
            if (allowedLetters.includes(i.toUpperCase())) {
                const index = allowedLetters.indexOf(i.toUpperCase())
                let cryptedLetter = 3 * (index + 1) + 5;
                cryptedNumbers.push(cryptedLetter);
                cryptedLetter > 29 ? cryptedLetter = cryptedLetter % 29 : cryptedLetter;
                cryptedOutput += allowedLetters[cryptedLetter - 1];
            }
        }
        setCryptedWord(cryptedOutput);
        setCryptedNumbers(cryptedNumbers);

        let inputClear = document.getElementById('input-field');
        if ((inputClear as HTMLInputElement)?.value) {
            (inputClear as HTMLInputElement).value = ''
        }
        
        alert(`Valor Criptografado: ${cryptedOutput}`);
    }
    return (
        <button className={styles.input}
            type="button"
            id="crypto-input"
            placeholder="Criptografia"
            name="Criptografia"
            onClick={handleCrypt}
        >Criptografia</button>
    );
}

export default Encrypt;