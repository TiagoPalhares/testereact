import styles from './Card.module.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from "react-icons/fa"
import { MdOutlineArrowForward } from "react-icons/md"
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card ({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                    <div className={styles.card_icones}>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                        <FaReact />
                    </div>    
                    <Link to={html_url} className={styles.botao}>
                        <MdOutlineArrowForward />
                    </Link>
            </div>
        </section>

    )
}

export default Card