import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'
import FeaturedImage from './FeaturedImage'

const PostHeader = ({ featuredImage, featuredImageAlt, title, to, date }) => (
  <div className="column is-7">
    <TransitionLink
      className="post-title"
      to={to}
      exit={{ length: 1 }}
      entry={{ length: 1, delay: 0.2 }}
    >
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
    </TransitionLink>
  </div>
)

export default PostHeader
