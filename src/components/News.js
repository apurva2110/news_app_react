import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { fireEvent } from "@testing-library/react";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8e70dfb7d265470195027fa972f7209f&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles, totalArticles:parsedData.totalResults});
  }

  handleNextClick = async() =>{
    console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalArticles/20)){

    }
    else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8e70dfb7d265470195027fa972f7209f&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page + 1
        });
    }
  }
  handlePrevClick = async() =>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8e70dfb7d265470195027fa972f7209f&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles:parsedData.articles,
        page:this.state.page - 1
    });
  }
  
  render() {
    return (
      <div>
        <div className="conatiner my-3 mx-3">
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
