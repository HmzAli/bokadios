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
                <h2>Home made authentic</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus reiciendis doloremque dolor? Unde minus, autem quaerat voluptatum magni explicabo praesentium asperiores esse nihil eum sunt molestiae modi veniam aliquam.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <div className="text-section section-left" data-aos="fade-in" data-aos-duration="1000">
              <div className="section-inner">
                <h2>Home made authentic</h2>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus reiciendis doloremque dolor? Unde minus, autem quaerat voluptatum magni explicabo praesentium asperiores esse nihil eum sunt molestiae modi veniam aliquam.</p>
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