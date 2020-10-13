import React from "react";
import { formatNumberK } from "../format";

const DailyCard = (props) => {
  return (
    <div className='daily-card'>
      <div className='daily-row'>
        <span className='daily-desc'> {props.card.dailyDesc}</span>
        <img src={props.card.svgIcon} alt='social media logo'></img>
      </div>
      <div className='daily-row'>
        <span className='daily-number primary'>
          {" "}
          {formatNumberK(props.card.dailyNumber)}
        </span>
        <span className={"daily-perc status-" + props.card.status}>
          {props.card.dailyPercent} %
        </span>
      </div>
    </div>
  );
};

export default DailyCard;
