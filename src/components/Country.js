import React from 'react'
import {useState} from 'react'

export default function Country(props) {

    let buttonStyle;
    if(props.mode == 'light')
        buttonStyle = 'primary';
    else
        buttonStyle = props.mode;

    return (
        <>
            <div className={`card border border-${props.mode}`}  width="auto" height="auto" >
                <div className="card-body" style = {props.cardStyle}>
                    <h5 className="card-title">{props.country}</h5>
                    <button className={`btn btn-sm btn-${buttonStyle}`}>Deaths</button>
                    <button className={`btn btn-sm btn-${buttonStyle} mx-2`}>Recovered</button>
                    <button className={`btn btn-sm btn-${buttonStyle}`}>Total</button>  
                </div>
            </div>
        </>
    )
}
