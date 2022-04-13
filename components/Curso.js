import styles from '../styles/Curso.module.css'

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>

        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a className={styles.enlace} href="#">Más Información</a>
        {/* Crear la seccion de cursos */}
        </div>

      </div>

      <style jsx>{`
        section{
          margin-top: 5rem;
          padding: 10rem 0;
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </section>
  )
}

export default Curso