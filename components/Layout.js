import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Red+Hat+Mono:wght@400;700&display=swap" rel="stylesheet"/> 
      </Head>

      <Header
        guitarra={guitarra}
      />
      {children}
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout