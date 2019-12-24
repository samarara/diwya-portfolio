import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostBody from './PostBody'

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

export default Posts
