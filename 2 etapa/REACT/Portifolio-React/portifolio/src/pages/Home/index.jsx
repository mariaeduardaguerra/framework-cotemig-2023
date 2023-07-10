/*import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container'*/
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import avatar from '../Sobre/images/male.png'

function Home() {
    return (
       <>
         
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Sandra Alves</span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
  </section>

        </> 
    )
}

export default Home

/*
   <img className={styles.img_home} src={avatar} alt="Imagem de Home" />
*/