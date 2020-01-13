import React, { useRef } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Image from '../components/Image'
import ContentHeader from '../components/ContentHeader'
import ContentTags from '../components/ContentTags'
import BackToTop from '../components/BackToTop'
import Content, { HTMLContent } from '../components/Content'
import withAnimation, { withCustomAnimation } from '../components/IndexPageHoc'
import ContentImages from '../components/ContentImages'

const ImageGrid = ({ images }) => {
  return images
    .reduce((acc, curr, index, sourceArray) => {
      const imageRow = [sourceArray[index], sourceArray[index + 1]]
      acc.push(imageRow)

      // mutates the array but necessary to forward the index
      images.shift()
      return acc
    }, [])
    .map((el, index) => (
      <div className="columns">
        <div className="column">
          <Image
            src={el[0].image.publicURL}
            fluid={el[0].image.childImageSharp.fluid}
          />
        </div>

        {!!el[1] ? (
          <div className="column">
            <Image
              src={el[1].image.publicURL}
              fluid={el[1].image.childImageSharp.fluid}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    ))
}

const PhotoStatement = ({ content }) => (
  <div class="card">
    <div class="card-content">
      <p class="title">
        <span style={{ display: 'inline' }}>"</span>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ display: 'inline' }}
        />
        <span style={{ display: 'inline' }}>"</span>
      </p>
    </div>
  </div>
)

const PhotoStatementBanner = ({ content }) => (
  <section className="hero is-dark is-marginless is-fullheight">
    <div className="hero-body">
      <div className="container">
        <p
          className="serif is-size-5-desktop is-size-6-mobile"
          style={{ display: 'inline', fontWeight: '100' }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
    </div>
  </section>
)

const ContentBody = ({
  images,
  tags,
  content,
  helmet,
  contentComponent,
  ref,
}) => {
  const imageGroupOne = images.slice(0, 2)
  const imageGroupTwo = images.slice(2, images.length)
  return (
    <>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-10">
              <ContentImages images={imageGroupOne} />
            </div>
          </div>
        </div>
      </section>
      <PhotoStatementBanner content={content} />
      <section className="section">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-10">
              <ContentImages images={imageGroupTwo} />
              <ContentTags tags={tags} />
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  )
}

const PhotographyTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  images,
  animation,
}) => {
  const contentRef = useRef(null)
  return (
    <div className={`animated ${animation}`}>
      <ContentHeader title={title} description={description} isFullHeight />
      <ContentBody
        images={images}
        tags={tags}
        content={content}
        helmet={helmet}
        contentComponent={contentComponent}
        ref={contentRef}
      />
    </div>
  )
}

export { PhotographyTemplate }

const Photography = ({ data, animation }) => {
  const { markdownRemark: post } = data
  return (
    <PhotographyTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      images={post.frontmatter.images}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      animation={animation}
    />
  )
}

export default withCustomAnimation('fadeIn', 'fadeOut')(Photography)

export const pageQuery = graphql`
  query PhotographyPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        images {
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        featuredimage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
