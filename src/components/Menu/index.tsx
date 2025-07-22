import './Menu.scss';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container-fluid container-xl">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500">A Selection of Our Menu </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-1.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Bokadios </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                      A warm sandwich in soft bread, available in beef, chicken, or vegetarian, with fresh toppings, fries, and a mix of sauces.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-2.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Shawarma </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                        Double-wrapped shawarma in beef or chicken, with lettuce, onion, pickles, and tahini sauce. Available in small or large size.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-3.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Falafel </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                      A vegetarian wrap with spiced chickpeas, lettuce, tomato, and a mix of homemade sauces—garlic, tomato, green chilli, and red chilli.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-4.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Fajita </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                        Fajita-style sandwich or wrap with your choice of chicken or beef, filled with capsicum, onion, mushroom, and sweet corn.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-5.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Tortilla </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                        A soft tortilla wrap filled with egg, fried onions, potatoes, and lettuce—simple, hearty, and satisfying.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-4">
                  <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./item-6.webp" alt="original" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h4> Arayes </h4>

                    <div className="product-desc">
                      <div className="product-caption">
                      Grilled flatbread filled with spiced minced beef or chicken, mixed with herbs and onions, then cooked until crisp and golden.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;