import React from 'react'
import withAnimation from '../../components/IndexPageHoc'
import CaseStudyRoll from '../../components/CaseStudyRoll'

const CaseStudiesIndexPage = props => (
  <CaseStudyRoll {...props} />
)

export default withAnimation(CaseStudiesIndexPage)
