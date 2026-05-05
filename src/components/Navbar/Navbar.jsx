import styles from "./Navbar.module.css";
import logo from "../../assets/logo.jpeg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <ul className={styles.menu}>
        <li className={styles.active}>INICIO</li>
        <li>INSTITUTO</li>
        <li>CARRERAS</li>
        <li>NOTICIAS</li>
        <li>CONTACTO</li>
        <li className={styles.cta}>INSCRIPCIONES ABIERTAS</li>
      </ul>
    </nav>
  );
}