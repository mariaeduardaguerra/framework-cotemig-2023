
import styles from './Sobre.module.css'
import avatar from './images/male.png'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs, DiMysql } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

/*
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
*/

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Sandra Alves</span> <br />
                    <strong>Dev e Professora</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2010.</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Fico muito orgulhosa em testemunhar a evolução pessoal e profissional de cada aluno</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={DiHtml5} alt="Ícone do html" />
                    <img src={DiCss3} alt="Ícone do css" />
                    <img src={DiJsBadge} alt="Ícone do js" />
                    <img src={DiReact} alt="Ícone do react" />
                    <img src={DiNodejs} alt="Ícone do node" />
                    <img src={DiMysql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

