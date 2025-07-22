import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" data-aos="fade-in" data-aos-duration="500">
        <div className="connect">
          <h4>Connect with us</h4>
          <ul className="social-links">
            <li>
              <a target="_blank" href="https://www.tiktok.com/@bokadios2022">
                <img src="./tiktok.png" alt="tiktok" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.facebook.com/groups/463360758558051/media">
                <img src="./facebook.png" alt="facebook" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://wa.me/+60126346774">
                <img src="./whatsapp.png" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <small>©Bokadios 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer 