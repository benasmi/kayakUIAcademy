import React from "react"

export default class SingleMovie extends React.Component{

  constructor(){
      super()
  }

  render(){

    console.log(this.props)

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
          <img style={imgStyle} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"/>
        </div>

        <div style={infoDiv}>
          <div>{this.props.item.original_title}</div>
          <div style={description}>{this.props.item.vote_average} Rating, {this.props.item.release_date}</div>
        </div>
      </div>
    )
  }

}
