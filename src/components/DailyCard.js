import React, { Component } from 'react'

export default class DailyCard extends Component {
  render() {
    return (
      <div className= "daily-card">
          <div className="daily-row">   
            <div className="daily-desc"> {this.props.dailyDesc}</div>
            <img src={this.props.svgIcon}></img>
          </div>
        <div className="daily-row"> 
          <div className="daily-number"> {this.props.dailyNumber}</div>
          <div className=  {"daily-perc " + "status-" + this.props.status}>{this.props.dailyPercent} %</div>
        </div>  
      </div>
    );
  };
  }



