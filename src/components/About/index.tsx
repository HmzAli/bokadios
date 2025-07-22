import './About.scss';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-md-6">
            <figure className="image-wrapper img-left" data-aos="fade-in" data-aos-duration="500">
              <img src="./about-1.webp" alt="Food truck" />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="text-section" data-aos="fade-in" data-aos-duration="1000">
              <div className="section-inner">
                <h2>Authentic Mediterranean Bites</h2>
                
                <p>Bokadios is a mobile kitchen based in the vibrant township of Damansara Perdana, offering sandwiches and light snacks. Focused on quality and craftsmanship, we prepare each item with care and attention to detail. Bokadios aims to provide a straightforward, satisfying food experience for anyone looking for a quick, honest meal in a relaxed setting.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <div className="text-section section-left" data-aos="fade-in" data-aos-duration="1000">
              <div className="section-inner">
                <h2>A Taste of Morocco </h2>
                
                <p>Our signature sandwich, the Bokadios, comes with your choice of beef, chicken or vegetarian. Inspired by everyday street food from Morocco, it's warm, simple, and made fresh to order. We keep things uncomplicated, focusing on familiar flavours and a straightforward approach that makes the Bokadios a favourite for many of our regulars.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <figure className="image-wrapper img-right">
              <img src="./about-2.webp" alt="Food truck" data-aos="fade-in" data-aos-duration="500" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 