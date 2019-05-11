import React from 'react';

function Friend(props) {
    return (
        <div className="friend-item" key={props.name}>
            <h3>Name: {props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Address: {props.address}</p>
            <button id={props.name} onClick={props.removeFriend} type="button" name="button">Delete</button>
        </div>
        
    )
}

export default Friend