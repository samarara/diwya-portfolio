import { useState, useEffect, useLayoutEffect } from 'react'

const useAnimation = (transitionStatus, entryAnimation, exitAnimation) => {
  const [animation, setAnimation] = useState('')
  // const { transitionStatus } = props
  useLayoutEffect(() => {
    if (transitionStatus === 'entering' || transitionStatus === 'entered') {
      setAnimation(entryAnimation)
    } else if (
      transitionStatus === 'exiting' ||
      transitionStatus === 'exited'
    ) {
      setAnimation(exitAnimation)
    }
    // else {
    //   setAnimation(entryAnimation)
    // }
    // return function cleanUp() {
    //   setAnimation("")
    // }
  }, [transitionStatus])
  return animation
}

const useDetailedAnimation = (
  transitionStatus,
  enteringAnimation,
  enteredAnimation,
  exitingAnimation,
  exitedAnimation
) => {
  const [animation, setAnimation] = useState('')
  const animationMap = {
    entering: enteringAnimation,
    entered: enteredAnimation,
    exiting: exitingAnimation,
    exited: exitedAnimation,
  }
  useLayoutEffect(() => {
    console.log('use detailed animation', animationMap[transitionStatus])
    setAnimation(animationMap[transitionStatus])
  }, [transitionStatus])
  return animation
}
export default useAnimation
export { useDetailedAnimation }
