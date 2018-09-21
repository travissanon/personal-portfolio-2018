import React from 'react'
import Link from 'gatsby-link'

import Articles from '../components/articles'

const ThirdPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="main">
      <div className="main__container">
        <Articles data={posts} preview={false}/>
      </div>
    </div>
  )
}

export default ThirdPage

export const pageQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            featuredImage
            path
          }
        }
      }
    }
  }
`;