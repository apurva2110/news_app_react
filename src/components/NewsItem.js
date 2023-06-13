import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, source, author, date} = this.props;
    return (
      <div>
        <div className="card">
        <div style={{display:'flex',justifyContent:'left',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">
        {source}
        </span></div>
        <img src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_640.jpg":imageUrl} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
