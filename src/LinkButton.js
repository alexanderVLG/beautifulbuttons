import React, {Component} from "react";
import "./LinkButton.css";

class LinkButton extends Component {
  
  render () {
    return(
      <button className="button">
        <svg className="button__svg">
          <rect className="button__rect"></rect>
        </svg>
        Перейти
      </button> 
    )
  }
}

export default LinkButton;