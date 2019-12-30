import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostBody = ({ excerpt, to, title }) => (
  <div className="column">
    <h1 className="title has-text-primary is-size-1-desktop is-size-1-tablet is-size-3-mobile">
      <Link className="has-text-primary" to={to}>
        {title}
      </Link>
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
