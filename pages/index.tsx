import { useState } from 'react';
import Decrypt from '../Components/decrypt'
import Encrypt from '../Components/encrypt'
import InputText from '../Components/InputText'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [cryptedNumbers, setCryptedNumbers] = useState<number []>([]);

  return (
    <div className={styles.container}>
      <h1>Criptografia e Descriptografia de mensagens por Cifra de César</h1>
      <InputText />
      <div className={styles.buttons}>
        <Encrypt
          setCryptedNumbers={setCryptedNumbers}
        />
        <Decrypt 
          cryptedNumbers={cryptedNumbers}
        />
      </div>
    </div>
  )
}
