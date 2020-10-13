import React, { useState, forwardRef, useImperativeHandle } from "react";
import Chart from "./Chart";

const Modal = forwardRef((props, ref) => {
  const [data, setData] = useState();
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: (object) => open(object),
    };
  });

  const open = (object) => {
    setData(object);
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return (
      <div className='modal-container'>
        <div onClick={close} className='modal-back'></div>
        <div className='modal-box'>
          <button onClick={close}>
            <span className='primary'>&#10006;</span>
          </button>
          <div className='info-container'>
            <div className='modal-title'>
              <h2>{data.modalTitle}</h2>
              <div className='user-name-modal'>
                <img src={data.svgIcon} alt='' />
                <span>@nathanf</span>
              </div>
            </div>
            <div className='modal-data'>
              <div className='text-container'>
                <span className='modal-number primary'>
                  {data.generalNumber}
                </span>
                <span id='first-text' className='primary-modal'></span>
              </div>
              <div className='text-container'>
                <span className={"modal-number status-" + data.status}>
                  {" "}
                  81
                </span>
                <span id='second-text' className='primary-modal'>
                  New followers in the past 10 days
                </span>
              </div>
              <div className='text-container'>
                <span className={"modal-number status-" + data.status}>
                  {" "}
                  {data.todayNumber}
                </span>
                <span id='third-text' className='primary-modal'>
                  New followers TODAY
                </span>
              </div>
            </div>
          </div>
          <div className='chart-container'>
            <span>May 4 - May 13</span>
            <Chart data={data} />
          </div>
        </div>
      </div>
    );
  }

  return null;
});

export default Modal;
