import styles from "./text.module.scss";

function InputText() {
    return (
        <div className={styles.InputText}>
            <h2>Insira a mensagem na caixa abaixo e clique na opção desejada:</h2>
            <input className={styles.input}
            type="text" 
            placeholder="Escreva sua mensagem aqui" 
            name="texto" 
            required>
            </input>
            </div>
    );
}

export default InputText;