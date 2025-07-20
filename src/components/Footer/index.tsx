import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" data-aos="fade-in" data-aos-duration="500">
        <div className="connect">
          <h4>Lorem Ipsum Heading</h4>
          <ul className="social-links">
            <li>
              <a target="_blank" href="https://www.instagram.com/bokadios.my/">
                <img src="./instagram.png" alt="instagram" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://wa.me/+601111474404">
                <img src="./whatsapp.png" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}

export default Footer 