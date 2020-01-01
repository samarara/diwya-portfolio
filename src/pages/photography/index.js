import React from 'react'
import PhotographyRoll from '../../components/PhotographyRoll'
import withAnimation from '../../components/IndexPageHoc'

const PhotographyIndexPage = props => (
  // <IndexPageHoc entry={entry} transitionStatus={transitionStatus} exit={exit} />
  // withAnimation(PhotographyRoll)(children, transitionStatus, entry, exit)
  <PhotographyRoll {...props} />
)

export default withAnimation(PhotographyIndexPage)
