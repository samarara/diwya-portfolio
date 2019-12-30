import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Posts from './Posts'

const CaseStudyRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="container container-margin">
      <Posts posts={posts} />
    </div>
  )
}

export default () => {
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
  return <CaseStudyRoll data={data} />
}

CaseStudyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
