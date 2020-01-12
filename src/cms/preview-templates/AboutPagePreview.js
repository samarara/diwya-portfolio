import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const entryImages = entry.getIn(['data', 'images'])
  const images = entryImages ? entryImages.toJS() : []
  console.log('images about page ', images)
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      sideBySideContent={widgetFor('body')}
      images={images}
      fullWidthContentTitle={entry.getIn(['data', 'artist-statement-title'])}
      fullWidthContent={entry.getIn(['data', 'artist-statement'])}
      featuredImage={entry.getIn(['data', 'featuredimage'])}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
