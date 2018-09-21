import React from 'react'
import Link from 'gatsby-link'

const SectionTitle = ({title, subtitle}) => (
  <div className="main__title">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
)

export default SectionTitle