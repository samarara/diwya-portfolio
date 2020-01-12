import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import remark from 'gatsby-transformer-remark'
import Layout from '../components/Layout'
import Image from '../components/Image'
import PreviewFeaturedImage from '../components/PreviewCompatibleImage'
import BackToTop from '../components/BackToTop'
import Content, { HTMLContent } from '../components/Content'
import withAnimation from '../components/IndexPageHoc'
import ContentImages from '../components/ContentImages'

const SideBySideBody = ({ content, contentComponent, imageInfo }) => {
  const PageContent = contentComponent || Content
  console.log('image info', imageInfo)
  console.log('remard', remark)
  return (
    <div className="columns">
      <div className="column is-desktop">
        <PageContent className="content" content={content} />
      </div>
      <div className="column is-half">
        <PreviewFeaturedImage imageInfo={imageInfo} />
      </div>
    </div>
  )
}

const Title = ({ title }) => (
  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    {title}
  </h2>
)

const FullWidthBody = ({ content, title, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div className="content">
      {/* <PageContent content={content} contentComponent={contentComponent} /> */}
      <h1 className="title">{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export const AboutPageTemplate = ({
  title,
  sideBySideContent,
  images,
  fullWidthContentTitle,
  fullWidthContent,
  featuredImage,
  contentComponent,
  animation,
}) => {
  const imageGroup1 = images.slice(0, 1)
  const imageGroup2 = images.slice(1, images.length)
  return (
    <>
      <section className={`section section--gradient animated ${animation}`}>
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-10">
              <Title title={title} />
              <SideBySideBody
                content={sideBySideContent}
                contentComponent={contentComponent}
                imageInfo={featuredImage}
              />
              <ContentImages images={imageGroup1} />
              <FullWidthBody
                content={fullWidthContent}
                title={fullWidthContentTitle}
                contentComponent={contentComponent}
              />
              <ContentImages images={imageGroup2} />
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, animation }) => {
  console.log('about page', animation)
  const { markdownRemark: post } = data
  console.log('about page post', post)
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      sideBySideContent={post.html}
      images={post.frontmatter.images}
      fullWidthContentTitle={post.frontmatter.artist_statement_title}
      fullWidthContent={post.frontmatter.artist_statement}
      featuredImage={post.frontmatter.featuredimage}
      animation={animation}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default withAnimation(AboutPage)

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        artist_statement
        artist_statement_title
        featuredimage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`
