import React, {useState, forwardRef, useImperativeHandle} from 'react';
import Chart from "./Chart";

const Modal = forwardRef((props,ref) => {
    const [display, setDisplay] = useState(false);
    var objectTemp = {} ;

    useImperativeHandle(
        ref,
        () => {
            return{                
            openModal: (object) => open(object)
            }
        });

    const open = (object) => {
        setDisplay(true);
        objectTemp=object.props;
        console.log(objectTemp);
        /* objectTemp = object; */
        
    }

    const close = () => {
        setDisplay(false)
    }
    

    if(display) {
        return (
            <div className="modal-container">
                <div onClick={close} className="modal-back"></div>
                <div className="modal-box">

                    <button onClick={close}><span className="primary">&#10006;</span></button>
                    <div className="info-container">
                        <h2>Facebook followers</h2>
                        <img src="../images/icon-facebook.svg" alt=""/>
                        <span>@nathanf</span>
                        <span className="modal-number primary">1987</span>
                        <span className="primary">Total followers</span>
                        <span className="modal-number status-green"> 81</span>
                        <span className="primary">New followers in the past 10 days</span>
                        <span className="modal-number status-green"> 12</span>
                        <span className="primary">New followers TODAY</span>
                    </div>
                    <div className="chart-container">
                        <span >May 4 - May 13</span>
                        <Chart/>
                    </div>
                </div>
            </div>
        )
    }

    return null;
    
})

export default Modal;