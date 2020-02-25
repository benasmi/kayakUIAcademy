import React from "react"

export default class SingleMovie extends React.Component{

  constructor(){
      super()
  }

  render(){

    console.log(this.props.item)

    const imgSrc = "https://image.tmdb.org/t/p/w500" + this.props.item.poster_path
    console.log(imgSrc)
    const imgStyle = {
      width: "32px",
      height: "32px"
    }

    const description = {
      color: "#4b5865",
      fontSize: "12px"
    }

    const infoDiv = {
      marginLeft: "16px"
    }

    return(
      <div className="singleMovieContent" onClick={()=>this.props.handleCardClick(this.props.item)}>
        <div>
          <img style={imgStyle} src={imgSrc}/>
        </div>

        <div style={infoDiv}>
          <div>{this.props.item.original_title}</div>
          <div style={description}>{this.props.item.vote_average} Rating, {this.props.item.release_date.substring(0,4)}</div>
        </div>
      </div>
    )
  }

}
