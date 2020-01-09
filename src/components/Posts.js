import React, { useEffect, forwardRef } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostBody from './PostBody'

const Posts = forwardRef(({ posts }, ref) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.scrollIntoView({ behavior: "smooth" })
  //     // ref.current.offsetParent.previousSibling.style.display = "none";
  //     // console.log(ref.current.offsetParent.previousSibling.style);
  //   }, 1000)

  //   // remove house container out of the dom

  //   // setTimeout(() => ref.current.offsetParent.previousSibling.style.display = "none", 1400)
  //   // ref.current.scrollIntoView({ behavior: "smooth" })
  // }, [ref])
  return (
    <div ref={ref}>
      {posts.map(({ node: post }) => (
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
      ))}
    </div>
  )
})
export default Posts
