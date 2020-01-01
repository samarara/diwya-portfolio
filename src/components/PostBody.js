import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'

const PostBody = ({ excerpt, to, title }) => (
  <div className="column">
    <h1 className="title has-text-primary is-size-1-desktop is-size-1-tablet is-size-3-mobile">
      <TransitionLink
        className="has-text-primary"
        to={to}
        exit={{ length: 1 }}
        entry={{ length: 1, delay: 0.2 }}
      >
        {title}
      </TransitionLink>
    </h1>

    <div className="subtitle serif">
      {excerpt}
      {/* <br /> */}
      {/* <Link className="button" to={to}>
        Keep Reading →
      </Link> */}
    </div>
    {/* <p className="post-meta">
      <Link
        className="title has-text-primary is-size-4"
        to={to}
      >
        {title}
      </Link>
      <span> &bull; </span>
    </p> */}
  </div>
)

export default PostBody
