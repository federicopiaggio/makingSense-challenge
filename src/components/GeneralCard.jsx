import React from "react";
import { formatNumberK } from "../format";

const GeneralCard = (props) => {
  return (
    <div
      onClick={() => props.OpenModal(props.card)}
      className={"general-card " + props.card.classBorder}
    >
      <div className='user-name-container'>
        <img src={props.card.svgIcon} alt='social media logo'></img>
        <span className='user-name'>{props.card.userName}</span>
      </div>
      <span className='general-number primary'>
        {formatNumberK(props.card.generalNumber)}
      </span>
      <span className='general-desc'>{props.card.generalDesc}</span>
      <span className={"general-daily status-" + props.card.status}>
        {props.card.todayNumber} Today
      </span>
    </div>
  );
};

export default GeneralCard;
