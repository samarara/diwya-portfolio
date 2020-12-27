import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Posts from './Posts'

const IllustrationsRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="container">
      <Posts posts={posts} />
    </div>
  )
}

export default () => {
  const data = useStaticQuery(graphql`
    query IllustrationsRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "illustrations" } } }
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
  return <IllustrationsRoll data={data} />
}

IllustrationsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
