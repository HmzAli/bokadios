import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
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
        description="Moroccan and Mediterranean sandwitches served hot and fresh."
        canonical="https://bokadios.com"
      />

      <MainBanner />
      <About />
      <Menu />
      <Order />
    </Layout>
  )
}

export default Index
