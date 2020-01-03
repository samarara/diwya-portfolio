import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  console.log('entry', entry)
  return (<AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    sideBySideContent={widgetFor('body')}
    fullWidthContentTitle={entry.getIn(['data', 'artist-statement-title'])}
    fullWidthContent={entry.getIn(['data', 'artist-statement'])}
    featuredImage={entry.getIn(['data', 'featuredimage'])}
  />)
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
