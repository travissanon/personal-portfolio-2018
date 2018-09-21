import React, { Component } from 'react'
import Link from 'gatsby-link'

import Videos from '../components/videos'

class FourthPage extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    }
  }

  componentWillMount() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD76pHEv9h9HkG3EQfMGVsIEw7I3XjsS98&part=snippet&type=video&channelId=UClE-pN-OOQrRUwi6HFHmDpA&maxResults=25')
      .then(res => res.json())
      .then(data => this.setState({ videos: data.items }))
  }

  render() {
    const videos = this.state.videos;

    return (
      <div className="main">
        <div className="main__container">
          <Videos data={videos} preview={false} />
        </div>
      </div>
    )
  }
}

export default FourthPage