import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, useStaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeaturedImage = ({ image, alt }) => {
  return image ? (
    <div className="featured-thumbnail">
      <PreviewCompatibleImage
        imageInfo={{
          image: image,
          alt: alt,
        }}
      />
    </div>
  ) : (
    <></>
  )
}

const PostHeader = ({ featuredImage, featuredImageAlt, title, to, date }) => (
  <div className="column is-7">
    <FeaturedImage image={featuredImage} alt={featuredImageAlt} />
    {/* <p className="post-meta">
      <Link
        className="title has-text-primary is-size-4"
        to={to}
      >
        {title}
      </Link>
      <span> &bull; </span>
      <span className="subtitle is-size-5 is-block">
        {date}
      </span>
    </p> */}
  </div>
)

const PostBody = ({ excerpt, to, title }) => (
  <div className="column">
    <h1 className="title has-text-primary is-size-1-desktop is-size-1-tablet is-size-3-mobile">
      <Link className="has-text-primary" to={to}>
        {title}
      </Link>
    </h1>

    <div className="subtitle serif">
      {excerpt}
      {/* <br /> */}
      {/* <Link className="button" to={to}>
        Keep Reading →
      </Link> */}
    </div>
    {/* <p className="post-meta">
      <Link
        className="title has-text-primary is-size-4"
        to={to}
      >
        {title}
      </Link>
      <span> &bull; </span>
    </p> */}
  </div>
)

const Posts = ({ posts }) =>
  posts.map(({ node: post }) => (
    <div className="columns is-vcentered" key={post.id}>
      <PostHeader
        featuredImage={post.frontmatter.featuredimage}
        featuredImageAlt={`featured image thumbnail for post ${post.frontmatter.title}`}
        title={post.frontmatter.title}
        to={post.fields.slug}
        date={post.frontmatter.date}
      />
      <PostBody
        excerpt={post.frontmatter.description}
        to={post.fields.slug}
        title={post.frontmatter.title}
      />
    </div>
  ))

const IndexRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="container container-margin">
      <Posts posts={posts} />
    </div>
  )
}

export default () => {
  const data = useStaticQuery(graphql`
    query IndexRollRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: {
            templateKey: { in: ["photography", "illustration", "case-study"] }
          }
        }
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
              featuredpost
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
  `)
  return <IndexRoll data={data} />
}

IndexRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
