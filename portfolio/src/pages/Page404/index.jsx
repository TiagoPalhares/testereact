import styles from './Page404.module.css'


function Page404() {
    return (
        <>
        <h2 className={styles.titulo2} >Algo não está certo!</h2>
        <div className={styles.textos}>
            <span className={styles.texto_grande}>404</span> <br />
            <strong className={styles.texto_vermelho}>Página Não Localizada</strong>
        </div>
        </>
    )
}

export default Page404 