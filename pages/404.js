import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'


const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Página no encontrada</h1>
      <Link href='/'>
        <a>
          Volver al inicio
        </a>
      </Link>
    </div>
  )
}

export default NoEncontrado