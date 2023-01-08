import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


export function logit() {
    console.log("Close button has been clicked")
}

const divStyle = {
    margin: "-85% 98%",
    background: "white",
    border: "none"
}

export default function Notifications() {
    return (
    <div className="Notifications">
         <button type="button" aria-label="Close" onClick={logit} style={divStyle}>
        <img src={closeIcon} height="15px" width="15" alt="close icon" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
    );
}
