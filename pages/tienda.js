import Layout from "../components/Layout"
import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {
  console.log(guitarras);
  return (
    <Layout
      pagina='Tienda Virtual'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}
//Estas funciones de consulta solo pueden ser ejecutadas 
//en paginas y urls no en componentes
export async function getServerSideProps(){
  //Process.enc.es una variable de entorno
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  //sort es una propiedad que ofrece strapi que nos permite crear nuestros propios filtros
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  //siempre se retorna un objeto con props
  return {
    props: {
      //objet literal enjasment algo así
      guitarras
    }
  }
}

export default Tienda