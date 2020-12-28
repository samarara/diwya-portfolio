import React from 'react'
import Img from 'gatsby-image'

const Image = ({ src, fluid }) =>
  !!src && !!fluid ? <img src={`${src}?nf_resize=fit&w=1920`} fluid={fluid} /> : <img src={`${src}?nf_resize=fit&w=1920`} />

export default Image
