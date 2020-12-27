import React from 'react'
import Img from 'gatsby-image'

const Image = ({ src, fluid }) =>
  !!src && !!fluid ? <img src={src} fluid={fluid} /> : <img src={src} />

export default Image
