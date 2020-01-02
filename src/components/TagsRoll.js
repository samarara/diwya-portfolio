import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Posts from './Posts'

const TagsRoll = props => {
  console.log('in tags roll')
  console.log('props', props)
  const { data, pageContext, animation } = props
  const { edges: posts, totalCount } = data.allMarkdownRemark
  const { siteMetaData: title } = data.site
  // const { tag } = pageContext
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? '' : 's'
  // } tagged with “${tag}”`
  return (
    <div className={`container animated ${animation}`}>
      {/* <Helmet title={`${tag} | ${title}`} /> */}
      {/* <Posts posts={posts} /> */}
      {posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))}
    </div>
  )
}


// export default ({ animation }) => {
//   const data = useStaticQuery(graphql`
//     query TagPage($tag: String) {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//       allMarkdownRemark(
//         limit: 1000
//         sort: { fields: [frontmatter___date], order: DESC }
//         filter: { frontmatter: { tags: { in: [$tag] } } }
//       ) {
//         totalCount
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               templateKey
//               date(formatString: "MMMM DD, YYYY")
//               featuredpost
//               description
//               featuredimage {
//                 childImageSharp {
//                   fluid(maxWidth: 720, quality: 100) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return <TagsRoll data={data} animation={animation} />
// }