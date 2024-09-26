import styles from './Sobre.module.css'
import avatar from './Images/Avatar.png'
import html from './Images/icon-html.svg'
import css from './Images/icon-css.svg'
import js from './Images/icon-js.svg'
import react from './Images/icon-react.svg'
import node from './Images/icon-node.svg'
import sql from './Images/icon-sql.svg'

function Sobre() {
    return(
        <section className={styles.Sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt='Avatar' className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Tiago Palhares</span> <br />          
                    <strong>Dev Front-end</strong></p>
                    <p>Trabalho com desenvolvimentoo Web desde 2024.</p>
                </div> 
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html} alt='Ícone do HTML' />
                        <img src={css} alt='Ícone do CSS' />
                        <img src={js} alt='Ícone do JS' />
                        <img src={react} alt='Ícone do REACT' />
                        <img src={node} alt='Ícone do NODE' />
                        <img src={sql} alt='Ícone do SQL' />
                    </div>
            </div>
        </section>
    )
}

export default Sobre 


