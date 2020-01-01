import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Posts from './Posts'

const CaseStudyRoll = ({ data, transitionStatus, animation }) => {
  const { edges: posts } = data.allMarkdownRemark
  const caseStudiesRollRef = useRef(null);
  // const animation = transitionStatus !== "entered" ? "slideInUp" : ""
  // useEffect(() => console.log('case studyes animation', animation), [animation])

  return (
    <div className={`container animated ${animation}`}>
      <Posts posts={posts} ref={caseStudiesRollRef}/>
    </div>
  )
}

export default ({ animation }) => {
  const data = useStaticQuery(graphql`
    query CaseStudyQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "case-studies" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              description
              project_details {
                client
                role
                team
              }
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 720, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return <CaseStudyRoll data={data} animation={animation}/>
}

CaseStudyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
