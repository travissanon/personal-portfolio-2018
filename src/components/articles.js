import React from 'react'
import Link from 'gatsby-link'

import SectionTitle from './sectionTitle'

const Articles = ({ data, preview }) => {
  let articles = [];

  if (preview === true) {
    for (const [index, { node: article }] of data.entries()) {
      if (index < 2) {
        articles.push(<Article data={article} key={index} />);
      } else { break }
    }
  } else {
    data.map(({ node: article }) => {
      articles.push(<Article data={article} />);
    })
  }
  return(
    <div>
      <SectionTitle title="Articles" subtitle="MY MOST RECENT ARTICLES." />
      <div className="main__posts">
        { articles }
      </div>
    </div>
  )
}

const Article = ({ data }) => (
  <div className="main__post" key={data.id}>
    {/* <img src={data.frontmatter.featuredImage} alt=""></img> */}
    <div className="main__description-post">
      <h2>
        <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
      </h2>
      <div className="main__tags">
        <p>{data.frontmatter.date}</p>
      </div>
      <p>{data.excerpt}</p>
    </div>
  </div>
)

export default Articles