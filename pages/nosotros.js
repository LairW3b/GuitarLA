import Layout from "../components/Layout"
import Image from "next/image"
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit commodi ratione itaque soluta illum modi porro rerum. Obcaecati sint officia nisi illum. Dicta modi quibusdam corrupti laborum, porro obcaecati ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus atque temporibus quas ipsam fuga quibusdam numquam, earum nemo a neque consectetur quidem facere labore voluptatum eveniet quae sed iure vero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias voluptatibus beatae consequuntur assumenda blanditiis, architecto facere officiis. Nam dolore a iste. Autem commodi nobis omnis quidem? Dolores, minima porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora praesentium nam odio vero nulla facere quod veritatis rem? Dicta maxime dolor deleniti suscipit adipisci. Quidem animi non cum possimus unde.
            </p>
          </div>
        </div>
      </main> 
    </Layout>
  )
}

export default Nosotros