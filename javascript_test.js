import React from "react";
import { InView } from "react-intersection-observer";

class CarouselBrand extends React.Component {

  constructor(props) {

    super(props);
    this.renderBrand = this.renderBrand.bind(this);
    this.renderBrandList = this.renderBrandList.bind(this);
  // Note : This is a temporary hack to save upon initial page load time
  // TODO : remove sprite completely and use images from database instead
    if (inView) {
      let spriteElements = document.getElementsByClassName("brandlogosprite");
      for (let i = 0; i < spriteElements.length; i++) {
        spriteElements[i].style.backgroundImage =
          "url(https://imgd.aeplcdn.com/0x0/bw/static/sprites/m/brand-type-sprite.png?v=20201013)";
      }
    }
  };

  renderBrand(brand) {
    return (
      <li className="carousel-slide">
        <div className="carousel-card" data-testing-id="brand-card">
          <a
            href={brand.Href}
            title={brand.Title}
            className="card-target-block"
          >
            <div className="brand-logo-image">
              <span data-testing-id="other-brands-card" className="brand-type">
                <span
                  className={"brandlogosprite brand-".concat(
                    brand.MakeId.toString()
                  )}
                ></span>
              </span>
            </div>
            <div className="card-details-block">
              <p className="brand-details__title">{brand.MakeName}</p>
              <h3 className="brand-details__subtitle">
                {`${brand.TotalCount} ${brand.Text}`}
              </h3>
            </div>
          </a>
        </div>
      </li>
    );
  }
  renderBrandList(brandList) {
    return (
      <ul className="carousel-wrapper brand-type-carousel">
        {brandList.map(
          function (brand) {
            return this.renderBrand(brand);
          }.bind(this)
        )}
      </ul>
    );
  }
  render() {
    let brandWidget = this.props.brandList;
    if (
      !brandWidget ||
      !brandWidget.MakeList ||
      brandWidget.MakeList.length == 0
    ) {
      return;
    }
    return (
      <InView
        rootMargin="640px"
        triggerOnce={true}
        onChange={this.handleInviewChange}
      >
        <div
          data-testing-id="other-brands-carousel"
          className="container bg-white box-shadow section-bottom-margin carousel-bottom-padding carousel-top-padding"
        >
          <div className="carousel-heading-content">
            <div className="swiper-heading-left-grid inline-block">
              <h2>{brandWidget.Heading}</h2>
            </div>
            <div className="swiper-heading-right-grid inline-block text-right">
              <a
                href={brandWidget.CompleteListUrl}
                title={brandWidget.CompleteListUrlAlternateLabel}
                className="btn view-all-target-btn oxygen-btn oxygen-btn-sm oxygen-btn-secondary-ghost"
              >
                {brandWidget.CompleteListUrlLabel}
              </a>
            </div>
          </div>
          {this.renderBrandList(brandWidget.MakeList)}
        </div>
      </InView>
    );
  }
}

export default CarouselBrand;
