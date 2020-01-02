import React from 'react'
import { kebabCase } from 'lodash'
// import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'

const ContentTags = ({ tags }) =>
  tags && tags.length ? (
    <div style={{ marginTop: `4rem` }}>
      <div className="tags are-large">
        {tags.map(tag => (
          <span key={`tag-${tag}`} className="tag">
            <TransitionLink 
              to={`/tags/${kebabCase(tag)}/`} 
              exit={{ length: 1 }}
              entry={{ length: 1, delay: 0.2 }}
            >
              {tag}
            </TransitionLink>
          </span>
        ))}
      </div>
    </div>
  ) : null

export default ContentTags
