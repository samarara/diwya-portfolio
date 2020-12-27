import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Posts from './Posts'

const PhotographyRoll = ({
  data,
  entry,
  transitionStatus,
  exit,
  animation,
}) => {
  const { edges: posts } = data.allMarkdownRemark
  const photoRollRef = useRef(null)
  // const [animation, setAnimation] = useState("");

  // useLayoutEffect(() => {
  //   console.log('in use layout effect', transitionStatus, entry, exit)
  //   if (transitionStatus !== "entered") {
  //     setAnimation("slideInUp")
  //   } else if (transitionStatus === "exiting") {
  //     setAnimation("slideOutUp")
  //   }
  // }, [])
  // const enterAnimation = transitionStatus !== "entered" ? "slideInUp" : ""
  // const exitAnimation = transitionStatus === "exiting" ? "slideOutUp" : ""
  // useEffect(() => console.log('animation', animation), [animation])
  // console.log('animation', animation)
  return (
    <div className={`container animated ${animation}`}>
      <Posts posts={posts} ref={photoRollRef} />
    </div>
  )
}

export default ({ animation }) => {
  const data = useStaticQuery(graphql`
    query PhotographyRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "photography" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              description
              featuredimage {
                publicURL
                # childImageSharp {
                #   fluid(maxWidth: 720, quality: 100) {
                #     ...GatsbyImageSharpFluid
                #   }
                # }
              }
            }
          }
        }
      }
    }
  `)
  return <PhotographyRoll data={data} animation={animation} />
}

PhotographyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
