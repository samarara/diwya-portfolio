import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'

const PostBody = ({ excerpt, to, title }) => (
  <div className="column section">
    <TransitionLink
      className="post-title"
      to={to}
      exit={{ length: 1 }}
      entry={{ length: 1 }}
      trigger={true}
    >
    <h1 className="title has-text-primary is-size-1-desktop is-size-1-tablet is-size-3-mobile">
        {title}
    </h1>

    <div className="subtitle serif">
      {excerpt}
    </div>
      </TransitionLink>
  </div>
)

export default PostBody
