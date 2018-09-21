import React from 'react'
import Link from 'gatsby-link'

import Projects from '../components/projects'

const FifthPage = ({ data }) => {
  const { edges: projects } = data.allProjectsJson;

  return (
    <div className="main">
      <div className="main__container">
        <Projects data={projects} preview={false} />
      </div>
    </div>
  )
}

export default FifthPage

export const pageQuery = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          id
          title
          description
          tags
          url
        }
      }
    }
  }
`;