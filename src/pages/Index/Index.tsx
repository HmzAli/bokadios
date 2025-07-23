import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Order from '../../components/Order'
import About from '../../components/About'
import Selections from '../../components/Selections'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'
import Menu from '../../components/Menu'

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
      <Selections />
      <Order />
    </Layout>
  )
}

export default Index
