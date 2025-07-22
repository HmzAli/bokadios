import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Products from '../../components/Products'
import Process from '../../components/Process'
import Testimonials from '../../components/Testimonials'
import Order from '../../components/Order'
import About from '../../components/About'
import Menu from '../../components/Menu'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'

function Index() {
  return (
    <Layout>
      <PageMetadata
        title="Bokadios"
        description="Bokadios is a handcrafted lemonade brand based in Bangi, Malaysia — made with real lemons, premium sugar, and no shortcuts. Order online, pick up weekly in KL."
        canonical="https://bokadios.com"
        keywords="buy lemonade, organic, natural drink"
      />

      <MainBanner />
      <About />
      <Menu />
      <Order />
    </Layout>
  )
}

export default Index
