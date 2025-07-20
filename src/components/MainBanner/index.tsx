import Cta from "../Cta"
import "./MainBanner.scss"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1>Lorem Ipsum Heading</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Cta text="order on whatsapp" link="https://wa.me/+601111474404" variant="secondary" icon="whatsapp" />
      </div>

      <figure className="banner-image" data-aos="fade-in" data-aos-duration="500">
        <img src="./main-banner.webp" alt="bokadios" />
      </figure>

      <figure className="banner-image-2" data-aos="fade-in" data-aos-duration="1000">
        <img src="./bottle-in-ice.webp" alt="product image" />
      </figure>
    </section>
  )
}

export default MainBanner 