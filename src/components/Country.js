import React from 'react'
import {useState} from 'react'

export default function Country(props) {

    let buttonStyle;
    if(props.mode == 'light')
        buttonStyle = 'primary';
    else
        buttonStyle = props.mode;

    const countryClicked = (element) => {
        console.log(element);
    }

    const buttonClicked = (element) => {
        console.log(element);
    }

    return (
        <>
            <div className={`card border border-${props.mode}`}  width="auto" height="auto" >
                <div className="card-body" style = {props.cardStyle}>
                    <h5 className="card-title">{props.country}</h5>
                    <div className="demo-container" id = {props.country} onClick = {() => countryClicked(props.country)}>
                        <button id = {`${props.country}Deaths`} className={`btn btn-sm btn-${buttonStyle}`} onClick={() => buttonClicked(props.country + 'Deaths')}>Deaths</button>
                        <button id = {`${props.country}Recovered`} className={`btn btn-sm btn-${buttonStyle} mx-2`} onClick={() => buttonClicked(props.country + 'Recovered')}>Recovered</button>
                        <button id = {`${props.country}Total`} className={`btn btn-sm btn-${buttonStyle}`} onClick={() => buttonClicked(props.country + 'Total')}>Total</button>  
                    </div>
                    
                </div>
            </div>
        </>
    )
}
