import React from 'react'
import houseOutline from '../img/House-Outline.svg'
import Layout from '../components/Layout'
import HouseOutline from '../components/HouseOutline'
import IndexRoll from '../components/IndexRoll'
import withAnimation, {
  withCustomAnimation,
  withHouseAnimation,
} from '../components/IndexPageHoc'

const IndexPage = props => {
  // console.log({
  //   'index entry': entry,
  //   'index exit': exit,
  //   'index transitionStatus': transitionStatus
  // })

  return (
    <>
      {/* <HouseOutline isIntro /> */}
      <IndexRoll isIndexPage={true} {...props} />
    </>
  )
}

export default withHouseAnimation(IndexPage)

// const IndexPageWithHouse = props => (
//   <>
//     <HouseOutline />
//     <IndexPageWithAnimation {...props}/>
//   </>
// )

// export default IndexPageWithHouse
