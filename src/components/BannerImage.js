import React from "react"

const BannerImage = ({ src, alt }) => (
  <section className="hero is-marginless is-fullheight">
    <div className="hero-body">
      <div className="container">
        <img src={src} alt={alt} />
      </div>
    </div>
  </section>
);

export default BannerImage;