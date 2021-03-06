import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({guitarra}) => {

  const router = useRouter()
  // haciendo un cgl a router podemo ver las funciones diponibles en use router

  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>

          <Link href='/'>
            {/* corregir error en layout agrgando un enlace */}
            <a>
              <Image width={400} height={100} src='/img/logo.svg' alt='imgagen logo' />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>
                Ver Producto
              </a>
            </Link>
          </div>
        )}

      </div>

      {router.pathname === '/' && (
        <img className={styles.guitarra} src='img/header_guitarra.png' alt='imagen guitarra'/>
      )}
    </header>
  )
}

export default Header