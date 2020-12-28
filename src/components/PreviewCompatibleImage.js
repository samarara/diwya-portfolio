import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = {}
  const { alt = '', childImageSharp, image } = imageInfo
  console.log('image in preview', imageInfo)
  if (!!image && !!image.childImageSharp) {
    return (
      <img
        src={image.publicURL}
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return <img src={image.publicURL} style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    console.log('preview image', image)
    return <img style={imageStyle} src={image} alt={alt} />
  }

  const netlifyTransformImg = `${!!image ? image.publicURL : imageInfo.publicURL}?nf_resize=fit&w=1920`; 
  return <img style={imageStyle} src={netlifyTransformImg} alt={alt} />
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
