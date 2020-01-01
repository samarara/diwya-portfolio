import React, { useState, useEffect } from 'react'
import HouseOutline from '../components/HouseOutline'
import useAnimation, { useDetailedAnimation } from '../hooks/useAnimation'
import Layout from './Layout'

const withAnimation = Component => props => {
  const { transitionStatus, path } = props
  console.log('is index page', props);
  console.log('with animation', transitionStatus)
  const animation = useAnimation(transitionStatus, "slideInUp", "slideOutUp")
  const isIndexPage = path === "/"
  return (
    <Layout>
      {isIndexPage ? <HouseOutline isIntro transitionStatus={transitionStatus}/> : null}
      <Component {...props} animation={animation}/>
    </Layout>
  )
}

const withCustomAnimation = (entryAnimation, exitAnimation) => Component => props => {
  const { transitionStatus, path } = props
  console.log('with custom animation', transitionStatus)
  const animation = useAnimation(transitionStatus, entryAnimation, exitAnimation)
  const isIndexPage = path === "/"
  return (
    <Layout>
      {isIndexPage ? <HouseOutline transitionStatus={transitionStatus}/> : null}
      <Component {...props} animation={animation}/>
    </Layout>
  )
}

const withHouseAnimation = Component => props => {
  const { transitionStatus, path } = props
  const houseAnimation = useDetailedAnimation(transitionStatus, "bounceInDown", "", "bounceOutUp", "")
  const sloganAnimation = useDetailedAnimation(transitionStatus, "bounceInRight", "", "bounceOutRight", "");
  const pageAnimation = useDetailedAnimation(transitionStatus, "", "slideInUp", "", "slideOutUp")

  return (
    <Layout>
      <HouseOutline transitionStatus={transitionStatus} houseAnimation={houseAnimation} sloganAnimation={sloganAnimation}/>
      <Component {...props} animation={pageAnimation}/>
    </Layout>
  )
}
export default withAnimation
export { withCustomAnimation, withHouseAnimation }