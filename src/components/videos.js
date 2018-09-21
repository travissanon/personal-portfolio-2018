import React from 'react'
import Link from 'gatsby-link'

import SectionTitle from './sectionTitle'

const Videos = ({ data, preview }) => {
  let videos = [];

  if (preview === true) {
    for (const [index, video] of data.entries()) {
      if (index < 6) {
        videos.push(<Video data={video} key={index} />);
      } else { break }
    }
  } else {
    data.map((video, index) => {
       videos.push(<Video data={video} key={index} />);
    })
  }

  return (
    <div>
      <SectionTitle title="Videos" subtitle="MY MOST RECENT VIDEOS." />
      <div className="main__videos">
        { videos }
      </div>
    </div>
  )
}

const Video = ({ data, index }) => {
  const replaceTextInString = (str, a, b) => {
    return str.replace(a, b);
  }
  return (
    <div className="main__video" key={index}>
      <img src={replaceTextInString(data.snippet.thumbnails.high.url, "hqdefault", "maxresdefault")} alt=""/>
      <div className="main__tags">
        <p>Javascript, Front-End</p>
      </div>
      <div className="main__description">
        <h2>{data.snippet.title}</h2>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  )
}

export default Videos

// {data.map((video) => {
//   return <Video data={video} />
// })}