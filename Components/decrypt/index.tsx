import styles from "./decrypt.module.scss";

function Decrypt(){
    return (
        <div className={styles.decrypt}>
            <input
            className={styles.input}
            type="button" 
            value="Descriptografar"
            placeholder="Descriptografia" 
            name="Descriptografia" 
            required>
            </input>
            </div>
    );
}

export default Decrypt;