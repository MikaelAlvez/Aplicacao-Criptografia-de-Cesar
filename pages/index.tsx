import Head from 'next/head'
import Image from 'next/image'
import Decrypt from '../Components/decrypt'
import Encrypt from '../Components/encrypt'
import InputText from '../Components/InputText'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Criptografia e Descriptografia de mensagens por Cifra de César</h1>
          <InputText></InputText>
        <div className={styles.buttons}>
          <Encrypt></Encrypt>
          <Decrypt></Decrypt>
        </div>
    </div>
  )
}
