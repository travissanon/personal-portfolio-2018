import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Videos from '../components/videos'
import Articles from '../components/articles'
import Projects from '../components/projects'

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    }
  }

  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD76pHEv9h9HkG3EQfMGVsIEw7I3XjsS98&part=snippet&type=video&channelId=UClE-pN-OOQrRUwi6HFHmDpA&maxResults=25')
      .then(res => res.json())
      .then(data => this.setState({ videos: data.items }))
  }

  render() {
    const videos = this.state.videos;
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const { edges: projects } = this.props.data.allProjectsJson;

    return (
      <div className="main">
        <div className="main__container">
          <Videos data={videos} preview={true}/>
          <Articles data={posts} preview={true}/>
          <Projects data={projects} preview={true}/>
        </div>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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