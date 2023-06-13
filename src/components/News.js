import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { fireEvent } from "@testing-library/react";
import Spinner from "./Spinner";

export class News extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      pageSize:6,
    };
    document.title=`${this.props.category} - NewsApp`;
  }

  async UpdateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles:parsedData.articles, 
        totalArticles:parsedData.totalResults,
        loading:false,
    });
  }

  async componentDidMount(){
      this.UpdateNews();
  }

  handleNextClick = async() =>{
    this.setState({page:this.state.page + 1,});
    this.UpdateNews();
  }
  handlePrevClick = async() =>{
    this.setState({page:this.state.page - 1,});
    this.UpdateNews();
  }
  
  render() {
    return (
      <div>
        <div className="container">
        <h2 className="text-center" style={{margin:'35px 0px'}}>Top {this.props.category} Headlines</h2>
          {this.state.loading&&<Spinner />}
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 py-2" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author?element.author:'Unknown'} date={element.publishedAt}/>
                </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
