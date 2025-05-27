import styles from './Contatos.module.css'
import { AiOutlineMail, AiOutlineInstagram, AiOutlineGithub,  AiOutlineYoutube, AiOutlineLinkedin } from "react-icons/ai"

function Contatos() {
    return(
        <>
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entrar em contato</h3>
            <p>Para que possamos conversar mais Sobre.</p>
            <div className={styles.icones}>
                <a href='mailto:tiagopalhares27@gmail.com' target='blank'
                rel='noopener noreferrer'>
                    <AiOutlineMail  className={styles.icone}/>
                </a>    
                <a href='https://www.instagram.com/tiagopalhares?igsh=MzBtZG50ZHU0Y214' target='blank'
                rel='noopener noreferrer'>
                <AiOutlineInstagram className={styles.icone}/>
                </a>    
                <a href='https://github.com/TiagoPalhares' target='blank'
                rel='noopener noreferrer'>
                <AiOutlineGithub className={styles.icone}/>
                </a> 
                <AiOutlineYoutube className={styles.icone}/>
                <AiOutlineLinkedin className={styles.icone}/>
            </div>
        </section>      
        </>
    )
}

export default Contatos