import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { PhotographyTemplate } from '../templates/photography'
// const IllustrationTemplate = props => {
//   const PostContent = contentComponent || Content
//   const {
//     content,
//     contentComponent,
//     description,
//     tags,
//     title,
//     helmet,
//     images,
//   } = props
//   console.log('photography template props', props)
//   return (
//     <section className="section">
//       {helmet || ''}
//       <div className="container content">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
//               {title}
//             </h1>
//             <div className="columns">
//               {images.map(el => (
//                 // <figure class="image is-5by4">
//                 //   <img src={el.image.publicURL}/>
//                 // </figure>
//                 <div class="column">
//                   <img src={el.image.publicURL} />
//                 </div>
//               ))}
//             </div>
//             <p>{description}</p>
//             <PostContent content={content} />
//             {tags && tags.length ? (
//               <div style={{ marginTop: `4rem` }}>
//                 <h4>Tags</h4>
//                 <ul className="taglist">
//                   {tags.map(tag => (
//                     <li key={tag + `tag`}>
//                       <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export { IllustrationTemplate as PhotographyTemplate }

const Illustration = ({ data }) => {
  const { markdownRemark: post } = data
  // console.log('data', data)
  return (
    <Layout>
      <PhotographyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        images={post.frontmatter.images}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default Illustration

// export default Photography

export const pageQuery = graphql`
  query IllustrationPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        images {
          image {
            publicURL
            # childImageSharp {
            #   fluid(maxWidth: 720, quality: 100) {
            #     ...GatsbyImageSharpFluid
            #   }
            # }
          }
        }
        featuredimage {
          publicURL
          # childImageSharp {
          #   fluid(maxWidth: 720, quality: 100) {
          #     ...GatsbyImageSharpFluid
          #   }
          # }
        }
      }
    }
  }
`
