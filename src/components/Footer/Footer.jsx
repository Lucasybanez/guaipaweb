import styles from "./Footer.module.css";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Logo + descripción */}
        <div className={styles.brand}>
          <img src={logo}alt="GuaiPa" />
          <p>
            Formamos talentos,<br />
            inspiramos futuras generaciones.
          </p>
        </div>

        {/* Enlaces */}
        <div className={styles.links}>
          <h4>ENLACES RÁPIDOS</h4>
          <ul>
            <li>Inicio</li>
            <li>Instituto</li>
            <li>Carreras</li>
            <li>Admisión</li>
            <li>Noticias</li>
            <li>Contacto</li>
            <li>Campus Virtual</li>
          </ul>
        </div>

        {/* Contacto */}
        <div className={styles.contact}>
          <h4>CONTACTO</h4>
          <p>📧 institutoguaipa@gmail.com</p>
          <p>📞 (0387) 421-1234</p>
          <p>📍 Guaipa, Monteros, Tucumán, Argentina</p>
        </div>

        {/* Redes */}
        <div className={styles.social}>
          <h4>SEGUINOS</h4>
          <div className={styles.icons}>
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2026 Instituto Superior de Arte Guaipa. Todos los derechos reservados.</p>
        <p>Desarrollado con pasión por el arte y la educación.</p>
      </div>
    </footer>
  );
}