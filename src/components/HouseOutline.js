import React, { useRef, useState, useEffect } from 'react'
import useAnimation from '../hooks/useAnimation'

const HouseOutline = ({
  isIntro,
  transitionStatus,
  houseAnimation,
  sloganAnimation,
}) => {
  const animationDelay = delay => ({ animationDelay: delay })

  return (
    <div className="container is-hidden-mobile is-visible-tablet">
      <div className="columns is-vcentered is-gapless">
        <div className="column">
          <svg
            width="593"
            height="690"
            viewBox="0 0 593 803"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: '-2.6rem' }}
          >
            <path
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.35s')}
              d="M399.5 0L432.842 33.75H366.158L399.5 0Z"
              fill="#292929"
            />
            <path
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.3s')}
              d="M361.5 43L249 143H549L439.588 43H361.5Z"
              fill="#292929"
            />
            <path
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.25s')}
              d="M237.848 153L126 253H447V153H237.848Z"
              fill="#292929"
            />
            <path
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.2s')}
              d="M116.828 263L6 363H336V263H116.828Z"
              fill="#292929"
            />
            <rect
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.15s')}
              y="373"
              width="251"
              height="100"
              fill="#292929"
            />
            <rect
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.1s')}
              y="483"
              width="334"
              height="100"
              fill="#292929"
            />
            <rect
              className={`animated ${houseAnimation}`}
              style={animationDelay('0.05s')}
              y="593"
              width="445"
              height="100"
              fill="#292929"
            />
            <rect
              className={`animated ${houseAnimation}`}
              y="703"
              width="593"
              height="100"
              fill="#292929"
            />
          </svg>
        </div>
        <div className="column diwya-slogan section">
          <h1
            className={`title has-text-primary is-size-1 animated ${sloganAnimation}`}
            style={{ animationDelay: '0.4s' }}
          >
            Diwya's Portfolio
          </h1>
          <h5
            className={`subtitle is-size-5 animated serif bounceInRight ${sloganAnimation}`}
            style={{ animationDelay: '0.45s' }}
          >
            A digital home to collect my experiences in design, illustration and
            photography.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default HouseOutline
