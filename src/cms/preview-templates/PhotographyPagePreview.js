import React from 'react'
import PropTypes from 'prop-types'
import { PhotographyTemplate } from '../../templates/photography'

const reduceImages = images => {
  console.log('images', images)
  const imagesPeviews = images.reduce((acc, curr) => {
    const formattedImage = {
      publicURL: curr.image,
      text: curr.text,
      childImageSharp: { fluid: undefined }
    }
    acc.push({ image: formattedImage })
    return acc
  }, [])
  return imagesPeviews
}
const PhotographyPreview = props => {
  const { entry, widgetFor } = props
  console.log('entry photo', entry)
  console.log('entry images', entry.getIn(['data']))
  const entryImages = entry.getIn(['data', 'images'])
  const images = entryImages ? entryImages.toJS() : []
  const imagesPeviews = reduceImages(images)
  console.log('image previews', imagesPeviews)
  return (
    <PhotographyTemplate
      content={entry.getIn(['data', 'body'])}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      images={imagesPeviews}
    />
  )
}

export default PhotographyPreview
