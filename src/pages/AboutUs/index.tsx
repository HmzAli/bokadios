import Layout from '../../components/Layout'
import Order from '../../components/Order'
import { PageMetadata } from '../../components/PageMetaData'

import './AboutUs.scss'

function AboutUs() {
  return (
    <Layout>
      <PageMetadata
        title="About Us - BOKADIOS"
        description="Discover the story behind Bokadios — born from a home kitchen in Bangi, inspired by love for fresh, healthy lemonade. Honest ingredients, handcrafted in small batches."
        canonical="https://bokadios.com/about-us"
      />

      <div className="about-us main-section" data-aos="fade-in" data-duration="500">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Lorem Ipsum Heading</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="col-md-6">
              <figure className="image-story">
                <img src="/story.webp" alt="Story" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <Order className="mt-5" />
    </Layout>
  )
}

export default AboutUs 