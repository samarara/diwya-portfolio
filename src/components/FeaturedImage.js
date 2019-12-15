import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeaturedImage = ({ image, alt }) => {
  return image ? (
    <div className="featured-thumbnail">
      <PreviewCompatibleImage
        imageInfo={{
          image: image,
          alt: alt,
        }}
      />
    </div>
  ) : (
    <></>
  )
}

FeaturedImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
}

export default FeaturedImage
