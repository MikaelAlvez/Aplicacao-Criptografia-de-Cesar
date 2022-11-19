import styles from "./decrypt.module.scss";

interface DecryptProps {
    cryptedNumbers: number[];
}

function Decrypt({ cryptedNumbers }: DecryptProps) {
    function handleDecrypt(cryptedNumbers: number[]) {
        const allowedLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.', ',', ' '];

        let decryptedWord: string = '';

        let i: number;
        for (i of cryptedNumbers) {
            let decryptedNumber = ((i - 5) / 3) - 1;
            decryptedWord += allowedLetters[decryptedNumber];
        }

        let inputClear = document.getElementById('input-field');
        if ((inputClear as HTMLInputElement)?.value) {
            (inputClear as HTMLInputElement).value = ''
        }

        alert(`Valor decriptografado: ${decryptedWord}`);
    }

    return (
        <input
            className={styles.input}
            type="button"
            value="Descriptografar"
            placeholder="Descriptografia"
            name="Descriptografia"
            onClick={() => handleDecrypt(cryptedNumbers)}
        >
        </input>
    );
}

export default Decrypt;