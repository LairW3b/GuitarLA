import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      {/* layout contiene componentes hijos */}
      <Layout 
        pagina='Inicio'
      >
        <h1>Desde inicio</h1>
      </Layout>
    </div>
  )
}
