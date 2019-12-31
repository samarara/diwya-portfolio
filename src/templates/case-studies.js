import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import ContentTags from '../components/ContentTags'
import Content, { HTMLContent } from '../components/Content'

const ContentHeaderProjectDetails = ({ role, team, client }) => (
  <>
    {role && (
      <div className="is-spaced">
        <strong>Role:&nbsp;</strong>
        <span>{role}</span>
      </div>
    )}
    {team && (
      <div className="is-spaced">
        <strong>Team:&nbsp;</strong>
        <span>{team}</span>
      </div>
    )}
    {client && (
      <div className="is-spaced">
        <strong>Client:&nbsp;</strong>
        <span>{client}</span>
      </div>
    )}
  </>
)
const ContentHeader = ({ title, role, team, client }) => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-1 is-spaced">{title}</h1>
        <div className="subtitle serif is-spaced">
          <ContentHeaderProjectDetails
            role={role}
            team={team}
            client={client}
          />
        </div>
      </div>
    </div>
  </section>
)

const ContentBody = ({ tags, content, helmet, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <section className="section" id="case-study-content">
        {helmet || ''}
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </section>
      <section className="section">
        <ContentTags tags={tags} />
      </section>
    </>
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
}) => (
  <>
    <ContentHeader title={title} role={role} team={team} client={client} />
    <ContentBody
      content={content}
      contentComponent={contentComponent}
      tags={tags}
    />
  </>
)

export { CaseStudyTemplate }

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('case study data', data)
  return (
    <Layout>
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
      />
    </Layout>
  )
}

export default CaseStudy

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