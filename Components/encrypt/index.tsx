import styles from "./encrypt.module.scss";

function Encrypt(){
    return (
        <div className={styles.encrypt}>
            <input className={styles.input}
            type="button" value="Criptografar"
            placeholder="Criptografia" 
            name="Criptografia" 
            required>
            </input>
            </div>
    );
}

export default Encrypt;