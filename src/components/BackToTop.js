import React from 'react'

const BackToTop = () => {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <section className="section">
      <button className="button is-white is-large" onClick={handleOnClick}>
        &#x2191; Back to top
      </button>
    </section>
  )
}

export default BackToTop
