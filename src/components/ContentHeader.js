import React from 'react'

const ContentHeader = ({ title, description, children, isFullHeight }) => {
  const height = isFullHeight ? 'is-fullheight' : ''
  return (
  <section className={`hero is-light ${height}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title title is-size-1-desktop is-size-1-tablet is-size-3-mobile is-spaced">{title}</h1>
        <h2 className="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">{description}</h2>
        <div className="serif">{children}</div>
      </div>
    </div>
  </section>
  )
}

export default ContentHeader