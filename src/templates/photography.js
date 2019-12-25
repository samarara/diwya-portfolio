import React from 'react';
import Helmet from 'react-helmet';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const ImageGrid = ({ images }) => {
  return images
    .reduce((acc, curr, index, sourceArray) => {
      console.log('index', index);
      const imageRow = [sourceArray[index], sourceArray[index + 1]];
      acc.push(imageRow);

      // mutates the array but necessary to forward the index
      images.shift();
      return acc;
    }, [])
    .map((el, index) => (
      <div className="columns">
        <div className="column">
          <Img
            src={el[0].image.publicURL}
            fluid={el[0].image.childImageSharp.fluid}
          />
        </div>

        {!!el[1] ? (
          <div className="column">
            <Img
              src={el[1].image.publicURL}
              fluid={el[1].image.childImageSharp.fluid}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    ));
};

const CotentHeader = ({ title, description }) => (
  <section className="hero is-light is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{description}</h2>
      </div>
    </div>
  </section>
);

const ContentImages = ({ images }) =>
  images.map(el => (
    <>
      <Img src={el.image.publicURL} fluid={el.image.childImageSharp.fluid} />
      <br />
    </>
  ));

const ContentTags = ({ tags }) =>
  tags && tags.length ? (
    <div style={{ marginTop: `4rem` }}>
      <h4>Tags</h4>
      <ul className="taglist">
        {tags.map(tag => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

const ContentBody = ({ images, tags, content, helmet, contentComponent }) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <ContentImages images={images} />
            <PostContent content={content} />
            <ContentTags tags={tags} />
          </div>
        </div>
      </div>
    </section>
  );
};

const PhotographyTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  images
}) => {
  return (
    <>
      <CotentHeader title={title} description={description} />
      <ContentBody
        images={images}
        tags={tags}
        content={content}
        helmet={helmet}
        contentComponent={contentComponent}
      />
    </>
  );
};

export { PhotographyTemplate };

const Photography = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log('data', data);
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
  );
};

export default Photography;

export const pageQuery = graphql`
  query PhotographyPostByID($id: String!) {
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
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        featuredimage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
