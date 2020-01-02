import React, { useRef } from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import ContentHeader from '../components/ContentHeader'
import ContentTags from '../components/ContentTags'
import BackToTop from '../components/BackToTop'
import Content, { HTMLContent } from '../components/Content'
import withAnimation, { withCustomAnimation } from '../components/IndexPageHoc'

const ImageGrid = ({ images }) => {
  return images
    .reduce((acc, curr, index, sourceArray) => {
      console.log('index', index)
      const imageRow = [sourceArray[index], sourceArray[index + 1]]
      acc.push(imageRow)

      // mutates the array but necessary to forward the index
      images.shift()
      return acc
    }, [])
    .map((el, index) => (
      <div className="columns">
        <div className="column">
          <Img
            src={el[0].image.publicURL}
            fluid={el[0].image.childImageSharp.fluid}
          />
        </div>

        {!!el[1] ? (
          <div className="column">
            <Img
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
      {/* <p class="subtitle">Jeff Atwood</p> */}
    </div>
  </div>
)

const PhotoStatementBanner = ({ content }) => (
  <section className="hero is-dark is-marginless is-fullheight">
    <div className="hero-body">
      <div className="container">
        {/* <h1 className="title">{title}</h1> */}
        {/* <h2 className="subtitle">{description}</h2> */}
        <p className="title is-size-5" style={{ display: 'inline' }}>
          {/* <span style={{display: "inline"}}>"</span> */}
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              display: 'inline',
              fontWeight: '100',
              lineHeight: '2rem',
              fontFamily: "'Zilla Slab', serif",
            }}
          />
          {/* <span style={{display: "inline"}}>"</span> */}
        </p>
      </div>
    </div>
  </section>
)

// const ContentHeader = ({ title, description }) => (
//   <section className="hero is-light is-fullheight">
//     <div className="hero-body">
//       <div className="container">
//         <h1 className="title is-size-1">{title}</h1>
//         <h2 className="subtitle serif">{description}</h2>
//       </div>
//     </div>
//   </section>
// )

const ContentImages = ({ images }) =>
  images.map(el => (
    <>
      <Img src={el.image.publicURL} fluid={el.image.childImageSharp.fluid} />
      <br />
    </>
  ))

// const ContentTags = ({ tags }) =>
//   tags && tags.length ? (
//     <div style={{ marginTop: `4rem` }}>
//       <h4>Tags</h4>
//       <ul className="taglist">
//         {tags.map(tag => (
//           <li key={tag + `tag`}>
//             <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ) : null;

const ContentBody = ({
  images,
  tags,
  content,
  helmet,
  contentComponent,
  ref,
}) => {
  const PostContent = contentComponent || Content
  console.log(images)
  // testing with immutable data first
  // need to copy the arrays in to new data sets after
  const imageGroupOne = images.slice(0, 2)
  const imageGroupTwo = images.slice(2, images.length)
  return (
    <>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ContentImages images={imageGroupOne} />
              {/* <PhotoStatement content={content}/> */}
              {/* <ContentImages images={imageGroupTwo} /> */}
              {/* <PostContent content={content} className="blockquote" /> */}
              {/* <ContentTags tags={tags} /> */}
            </div>
          </div>
        </div>
      </section>
      <PhotoStatementBanner content={content} />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {/* <ContentImages images={imageGroupOne} /> */}
              {/* <PhotoStatement content={content}/> */}
              <ContentImages images={imageGroupTwo} />
              {/* <PostContent content={content} className="blockquote" /> */}
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
      <ContentHeader title={title} description={description} isFullHeight/>
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
  console.log('data', data)
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
