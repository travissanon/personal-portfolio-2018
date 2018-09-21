import React from 'react'
import Link from 'gatsby-link'

import SectionTitle from './sectionTitle'

const Projects = ({ data, preview }) => {
  let projects = [];

  if (preview === true) {
    for (const [index, { node: project }] of data.entries()) {
      if (index < 2) {
        projects.push(<Project data={project} key={index} />);
      } else { break }
    }
  } else {
    data.map(({ node: project }, index) => {
      projects.push(<Project data={project} key={index} />);
    })
  }

  return(
    <div>
      <SectionTitle title="Projects" subtitle="MY MOST RECENT PROJECTS." />
      <div className="main__posts">
        { projects }
      </div>
    </div>
  )
}

const Project = ({ data }) => (
  <div className="main__post" key={data.id}>
    <div className="main__description-post">
      <h2>
        <a href={data.url}>{data.title}</a>
      </h2>
      <div className="main__tags">
        <p>{data.tags}</p>
      </div>
      <p>{data.description}</p>
    </div>
  </div>
)

export default Projects