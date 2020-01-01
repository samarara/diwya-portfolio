import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BackToTop from '../components/BackToTop'
import Content, { HTMLContent } from '../components/Content'
import withAnimation from '../components/IndexPageHoc'

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  animation,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className={`section section--gradient animated ${animation}`}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className={`content`} content={content} />
              </div>
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

  return (
    // <Layout>
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      animation={animation}
    />
    // </Layout>
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
      }
    }
  }
`
