import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import ContentTags from '../components/ContentTags'
import BackToTop from '../components/BackToTop'
import Content, { HTMLContent } from '../components/Content'
import ContentHeader from '../components/ContentHeader'
import { withCustomAnimation } from '../components/IndexPageHoc'

const ContentHeaderProjectDetails = ({ role, team, client }) => (
  <>
    {role && (
      <div className="is-spaced">
        <strong className="is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          Role:&nbsp;
        </strong>
        <span className="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          {role}
        </span>
      </div>
    )}
    {team && (
      <div className="is-spaced">
        <strong className="is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          Team:&nbsp;
        </strong>
        <span className="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          {team}
        </span>
      </div>
    )}
    {client && (
      <div className="is-spaced">
        <strong className="is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          Client:&nbsp;
        </strong>
        <span className="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile serif">
          {client}
        </span>
      </div>
    )}
  </>
)

const ContentBody = ({ tags, content, helmet, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <section className="section columns is-centered" id="case-study-content">
        {helmet || ''}
        <div className="container column is-10">
          <PageContent className="content" content={content} />
          <ContentTags tags={tags} />
        </div>
      </section>
      {/* <section className="section columns is-centered">
        <div className="container column is-10">
          <ContentTags tags={tags} />
        </div>
      </section> */}
      <BackToTop />
    </div>
  )
}
const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  role,
  team,
  client,
  animation,
}) => (
  <div className={`animated ${animation}`}>

    <ContentHeader title={title} isFullHeight>
      <ContentHeaderProjectDetails
        role={role}
        team={team}
        client={client}
      />
      </ContentHeader>
    <ContentBody
      content={content}
      contentComponent={contentComponent}
      tags={tags}
    />
  </div>
)

export { CaseStudyTemplate }

const CaseStudy = ({ data, animation }) => {
  const { markdownRemark: post } = data
  console.log('case study data', data)
  return (
    <CaseStudyTemplate
      content={post.html}
      contentComponent={HTMLContent}
      className="case-study"
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
      role={post.frontmatter.project_details.role}
      team={post.frontmatter.project_details.team}
      client={post.frontmatter.project_details.client}
      animation={animation}
    />
  )
}

export default withCustomAnimation('fadeIn', 'fadeOut')(CaseStudy)

export const pageQuery = graphql`
  query CaseStudyPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        project_details {
          client
          role
          team
        }
      }
    }
  }
`
