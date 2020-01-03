import  React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-studies'

const CaseStudyPagePreview = ({ entry, widgetFor}) => {
  console.log('entry', entry);
  const projectDetails = entry.getIn(['data', 'project-details'])
  return (
    <CaseStudyTemplate
      content={widgetFor('body')}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      role={entry.getIn(['data', 'project-details', 'role'])}
      team={entry.getIn(['data', 'project-details', 'team'])}
      client={entry.getIn(['data', 'project-details', 'client'])}
    />
  )
}

export default CaseStudyPagePreview