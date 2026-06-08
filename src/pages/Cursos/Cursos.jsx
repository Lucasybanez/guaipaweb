import styles from "./Cursos.module.css";
import cursos from "./cursos.json";

const Cursos = () => {
  return (
    <div>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.hero_info}>
          <p className={styles.hero_subtitulo}>
            Formación online certificada
          </p>

          <h1>
            Aprendé nuevas habilidades sin horarios ni distancias
          </h1>

          <p className={styles.hero_descripcion}>
            Accedé a cursos virtuales diseñados para potenciar tu desarrollo
            profesional y personal. Estudiá a tu ritmo desde cualquier lugar.
          </p>

          <div className={styles.hero_botones}>
            <button className={styles.botonPrimario}>
              VER CURSOS
            </button>

            <button className={styles.botonSecundario}>
              CONSULTAR
            </button>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className={styles.estadisticas}>
        <div className={styles.estadistica}>
          <h2>+500</h2>
          <p>Alumnos capacitados</p>
        </div>

        <div className={styles.estadistica}>
          <h2>{cursos.length}+</h2>
          <p>Cursos disponibles</p>
        </div>

        <div className={styles.estadistica}>
          <h2>100%</h2>
          <p>Modalidad virtual</p>
        </div>

        <div className={styles.estadistica}>
          <h2>✔</h2>
          <p>Certificación institucional</p>
        </div>
      </section>

      {/* ENCABEZADO */}
      <section className={styles.encabezadoCursos}>
        <h3>NUESTROS CURSOS</h3>

        <h2>
          Elegí la capacitación ideal para vos
        </h2>

        <p>
          Cursos virtuales desarrollados por docentes especializados,
          accesibles desde cualquier dispositivo y con acompañamiento académico.
        </p>
      </section>

      {/* CURSOS */}
      <section className={styles.cursosGrid}>
        {cursos.map((curso) => (
          <article
            key={curso.id}
            className={styles.cursoCard}
          >
            <div className={styles.cursoCard_header}>
              <span>
                {curso.categoria}
              </span>
            </div>

            <div className={styles.cursoCard_contenido}>
              <h3>{curso.titulo}</h3>

              <p>
                {curso.descripcion}
              </p>

              <div className={styles.cursoCard_meta}>
                <span>
                  ⏳ {curso.duracion}
                </span>

                <span>
                  💻 {curso.modalidad}
                </span>
              </div>

              <button>
                MÁS INFORMACIÓN
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* BENEFICIOS */}
      <section className={styles.beneficios}>
        <div className={styles.beneficio}>
          <h3>🎓 Certificación institucional</h3>
          <p>
            Acreditá tus conocimientos con certificaciones emitidas por el instituto.
          </p>
        </div>

        <div className={styles.beneficio}>
          <h3>💻 Campus virtual 24/7</h3>
          <p>
            Accedé a clases, materiales y actividades cuando quieras.
          </p>
        </div>

        <div className={styles.beneficio}>
          <h3>📱 Acceso desde cualquier dispositivo</h3>
          <p>
            Estudiá desde computadora, tablet o celular.
          </p>
        </div>

        <div className={styles.beneficio}>
          <h3>📚 Material descargable</h3>
          <p>
            Recursos complementarios para profundizar cada temática.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.cta_contenido}>
          <h2>
            Comenzá hoy mismo tu próxima formación
          </h2>

          <p>
            Sumate a nuestra comunidad educativa y desarrollá nuevas
            habilidades con una modalidad flexible y accesible.
          </p>

          <button>
            INSCRIBIRME AHORA
          </button>
        </div>
      </section>

    </div>
  );
};

export default Cursos;