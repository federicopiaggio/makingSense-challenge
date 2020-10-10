
import React, { Component } from 'react';
import {formatNumberK} from "../format";

export default class GeneralCard extends Component {
  render() {

    return (
      <div className={"general-card "+ this.props.classBorder }>
        <div className="user-name-container">
          <img src={this.props.svgIcon}></img>        
          <span className="user-name">{this.props.userName}</span>
        </div>
      <div className="general-number">{formatNumberK(this.props.generalNumber)}</div>
      <div className="general-desc">{this.props.generalDesc}</div>
      <div className= {"general-daily " + "status-" + this.props.status}>{this.props.todayNumber} Today</div>
    </div>
    )
  }
}
