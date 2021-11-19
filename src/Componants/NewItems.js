import React, { Component } from 'react'

export default class NewItems extends Component {
    render() {

        let {title,decription,imgurl,newsurl,author,date,source} =this.props;
        return (
            <div className="card my-3" >
                <div>
                <span className=" badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:"absolute",right:'0'}}>{source}</span>
                </div>
                    
                    <img src={imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{decription}</p>
                        <a href={newsurl} target="_black" className="btn btn-dark">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
                    </div>
            </div>
        )
    }
}
