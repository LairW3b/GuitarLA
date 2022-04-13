import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'
const Blog = ({ entradas }) => {

  //si se ejecuta del lado del cliente
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

  return (
    <Layout
      pagina='Blog'
    >
      <main className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        /> 
      </main>
    </Layout>
  )
}

/**
 ** Consumiendo con ServerSideProps 
 * Esta función aunque se exporta aqui se importa automaticamente
 * aquí 
 * 
 * usa ServerSidePops cuando el contenido cambie muy seguido
 * getStaticProps cuando el contenido sea statico
 * 
*/
export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  /** simpre debes retornar  un objeto */
  return {
    props: {
      entradas
    }
  }
}

export default Blog