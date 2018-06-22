import React, { Component } from 'react';


export class DemoDescription extends Component {
  render() {
  const { link, img, description, imgAlt} = this.props
    return(
      <div className="demo">
        <a href={link} target="_blank">
          <img className="demo__img" src={img} alt={imgAlt}></img>
        </a>
        <p><a href={link} target="_blank"> {description} </a></p>
      </div>
    );
  }
}
