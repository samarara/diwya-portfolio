import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostBody = ({ excerpt, to, title }) => (
  <div className="column">
    <Link className="title has-text-primary is-size-1 is-size-1-desktop is-size-4-mobile" to={to}>
      {title}
    </Link>
    <p>
      {excerpt}
      <br />
      {/* <Link className="button" to={to}>
        Keep Reading →
      </Link> */}
    </p>
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
