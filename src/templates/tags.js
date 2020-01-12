import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TransitionLink from 'gatsby-plugin-transition-link'
import Posts from '../components/Posts'
import withAnimation from '../components/IndexPageHoc'
import ContentHeader from '../components/ContentHeader'

const TagRoute = ({ data, pageContext, animation }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { tag } = pageContext

  return (
    <>
      <ContentHeader title={`#${tag}`} isFullHeight={false}>
        <TransitionLink
          className="subtitle"
          to="/tags/"
          exit={{ length: 1 }}
          entry={{ length: 1, delay: 0.2 }}
        >
          Browse all tags
        </TransitionLink>
      </ContentHeader>
      <div className={`container animated ${animation}`}>
        <Posts posts={posts} />
      </div>
    </>
  )
}

export default withAnimation(TagRoute)

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
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
`
