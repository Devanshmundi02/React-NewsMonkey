import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imgurl, newsurl,author,date} = this.props;
        return (
            <div>
                <div className=  "card shadow-lg p-3 mb-5 bg-white rounded">
                    <img src = {!imgurl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=":imgurl} className=  "card-img-top" alt="..."/>
                        <div className=  "card-body">
                            <h5 className=  "card-title">{title}</h5>
                            <p className=  "card-text">{description}</p>
                            <p className = "card-text"><small className = "text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsurl} target = "_blank" className=  "btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
