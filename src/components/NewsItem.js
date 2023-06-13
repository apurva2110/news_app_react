import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, source, author, date} = this.props;
    return (
      <div>
        <div className="card">
        <img src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_640.jpg":imageUrl} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{title}
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'10%',fontSize:'10px'}}>
            {source}
            </span></h5>
            <p className="card-text">{description} ...</p>
            <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
