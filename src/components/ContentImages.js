import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ContentImages = ({ images }) => {
  // images.map(el => console.log('each element', el.image.childImageSharp.fluid))
  console.log('content images', images)
  return images.map(el => (
    <>
      <PreviewCompatibleImage imageInfo={el} />
      <br />
      {!!el.text && (
        <h5 className="has-text-centered serif is-italic has-text-grey-light">
          {el.text}
        </h5>
      )}
    </>
  ))
}
export default ContentImages
