import { Link } from "react-router"
import "./MainBanner.scss"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">Fast & Delicious!</h1>
           <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="300">Moroccan and Mediterranean sandwitches served hot and fresh.</p> 
        </div>
      </div>

      <figure className="banner-image" data-aos="fade-in" data-aos-duration="500">
        <img src="./main-banner.webp" alt="bokadios" />
      </figure>

      <figure className="banner-logo" data-aos="fade-in" data-aos-duration="500">
        <a href="/">
          <img src="./logo.png" alt="bokadios" />
        </a>
      </figure>
    </section>
  )
}

export default MainBanner 