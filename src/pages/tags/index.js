import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import Layout from '../../components/Layout'
import ContentHeader from '../../components/ContentHeader'
import withAnimation from '../../components/IndexPageHoc'

const Tags = ({ tags }) => (
  <div className="field is-grouped is-grouped-multiline">
    {tags.map(tag => (
      <div key={tag.fieldValue} className="control">
        <div className="tags are-large has-addons">
          <span className="tag is-light is-link">
            <TransitionLink
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              exit={{ length: 1 }}
              entry={{ length: 1, delay: 0.2 }}
            >
              {tag.fieldValue}
            </TransitionLink>
          </span>
          <span className="tag is-black">{tag.totalCount}</span>
        </div>
      </div>
    ))}
  </div>
)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  // <Layout>
  <>
    <ContentHeader title="# tags">{/* <Tags tags={group} /> */}</ContentHeader>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column"
            // style={{ marginBottom: '6rem' }}
          >
            <Tags tags={group} />
          </div>
        </div>
      </div>
    </section>
  </>
  // </Layout>
)

export default withAnimation(TagsPage)

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
