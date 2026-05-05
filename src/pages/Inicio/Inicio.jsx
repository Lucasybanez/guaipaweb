import styles from './Inicio.module.css';

import bienvenidaImg from '../../assets/Inicio/bienvenida.png';
import profDanza from "../../assets/Inicio/prof_Danza.png";
import profDanzaIcon from "../../assets/Inicio/prof_DanzaIcon.png";
import profMusicaIcon from "../../assets/Inicio/prof_MusicaIcon.png";

const Inicio = () => {
    return (
        <div>
          <section className={styles.bienvenida}>
            <div className={styles.bienvenida_boxInfo}>
              <p className={styles.bienvenida_boxInfo_p1}>Formamos talento, inspiramos futuras generaciones</p>
              <h2>Arte, educación y transformación</h2>
              <p>Carreras terciarias orientadas a la formación integral de educadores de danza y música.</p>
              <div className={styles.bienvenida_boxInfo_btns}>
                <button className={styles.botonPrimario}>CONOCÉ NUESTRAS CARRERAS</button>
                <button className={styles.botonSecundario}>SOBRE EL INSTITUTO</button>
              </div>
            </div>
            <img src={bienvenidaImg} className={styles.bienvenida_boxImg}/>
          </section>

          <section className={styles.nuestrasCarreras}>
            <div className={styles.nuestrasCarreras_encabezado}>
              <h3>NUESTRAS CARRERAS</h3>
              <h2>Elegí tu vocación, formá tu futuro</h2>
            </div>
            <div className={styles.nuestrasCarreras_carreras}>

              <div className={styles.nuestrasCarreras_carreras_carrera}>
                <div className={styles.nuestrasCarreras_carreras_carrera_info}> 
                  <div className={styles.nuestrasCarreras_carreras_carrera_info_encabezado}>
                    <img src={profDanzaIcon} alt=""/>
                    <div className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos}>
                      <p className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_p1}>Profesorado de</p>
                      <h4 className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_h4}>Danza</h4>
                      <p>con orientación en</p>
                      <p className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_p3}>Danza Folklórica</p>
                    </div>
                  </div>
                  <p>Formamos docentes capaces de transmitir, investigar y valorar nuestras danzas tradicionales, promoviendo la identidad cultural y el patrimonio.</p>
                  <button>MÁS INFORMACIÓN</button>
                </div>
                <img src={profDanza} alt="" />
              </div>

              <div className={styles.nuestrasCarreras_carreras_carrera}>
                <div className={styles.nuestrasCarreras_carreras_carrera_info}> 
                  <div className={styles.nuestrasCarreras_carreras_carrera_info_encabezado}>
                    <img src={profMusicaIcon} alt="" />
                    <div className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos}>
                      <p className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_p1}>Profesorado de</p>
                      <h4 className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_h4}>Música</h4>
                      <p>con orientación en</p>
                      <p className={styles.nuestrasCarreras_carreras_carrera_info_encabezado_titulos_p3}>Educación Musical</p>
                    </div>
                  </div>
                  <p>Preparamos educadores musicales con herramientas pedagógicas y artísticas para inspirar el aprendizaje y el desarrollo integral a través de la música.</p>
                  <button>MÁS INFORMACIÓN</button>
                </div>
                <img src={profDanza} alt="" />
              </div>
            </div>

          </section>



          <seccion className={styles.distintivos}>
            <div className={styles.distintivos_box}>
              <img src="" alt="" />
              <div>
                <h3>Formación de calidad</h3>
                <p>Docentes especializados y enfoque pedagógico integral.</p>
              </div>
            </div>
            <div className={styles.distintivos_box}>
              <img src="" alt="" />
              <div>
                <h3>Comunidad artística</h3>
                <p>Un espacio de aprendizaje y creación y colaboración</p>
              </div>
            </div>
            <div className={styles.distintivos_box}>
              <img src="" alt="" />
              <div>
                <h3>Compromiso cultural</h3>
                <p>Promovemos la identidad, el arte y la educación</p>
              </div>
            </div>
            <div className={styles.distintivos_box}>
              <img src="" alt="" />
              <div>
                <h3>Proyección profesional</h3>
                <p>Herramientas para desarrollarte</p>
              </div>
            </div>
          </seccion>
          
          <seccion>
            {/* Aquí irán las noticias */}
          </seccion>
        </div>
    );
}

export default Inicio;