import React, { useState } from "react";
import "./style.css";

export default function ToDo(){
    const [isBtnClicked, setBtnClicked] = useState(false);

    const clicked = () => {
        setBtnClicked(!isBtnClicked);
    }
    return (
    <div className="plans">
        <div className="title">
            <h2>To Do</h2>
            <hr />
        </div>
        <div className="lists">
            <p>Write Essay</p>
            <p>One Hour CSS Course Online</p>
            <p>Buy One Way Ticket to San Fransico</p>
            <p>Go to Gym</p>
            <p>Buy Groceries</p>
            <button onClick={clicked} className="trashButton" style={{
                backgroundColor: isBtnClicked ? 'rgba(0, 0, 0, 0.16)' : 'rgba(0, 0, 0, 0.26)', 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center'
                }}>
                <p style={{
                    fontSize: 26, 
                    paddingRight: 15, 
                    paddingLeft: 5, 
                    paddingBottom: 7
                    }}>&#128465;</p>
                <p style={{
                    fontSize: 16, 
                    paddingBottom: 5
                    }}>Move to Trash</p>
            </button>
        </div>
    </div>
    )
}