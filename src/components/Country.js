import React from 'react'
import CountryList from './CountryList';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

export default function Country(props) {

    let buttonStyle;
    if(props.mode == 'light')
        buttonStyle = 'primary';
    else
        buttonStyle = props.mode;


    function countryClicked(element)
    {
        localStorage.clear();
        let country = element.split(',')[0];
        let status = element.split(',')[1];

        localStorage.setItem('country', country);
        localStorage.setItem('status', status);

    }

    return (
        <>
            <div className={`card border border-${props.mode}`}  width="auto" height="auto" >
                <div className="card-body" style = {props.cardStyle}>
                    <h5 className="card-title">{props.country}</h5>
                    <div className="demo-container" id = {props.country}>
                        <Link to = "/details"> <button id = {`${props.country},Deaths`} className={`btn btn-sm btn-${buttonStyle}`} onClick={() => countryClicked(props.country + ',Deaths')}>Deaths</button></Link>
                        <Link to = "/details"> <button id = {`${props.country},Recovered`} className={`btn btn-sm btn-${buttonStyle} mx-2`} onClick={() => countryClicked(props.country + ',Recovered')}>Recovered</button></Link>
                        <Link to = "/details"> <button id = {`${props.country},Total`} className={`btn btn-sm btn-${buttonStyle}`} onClick={() => countryClicked(props.country + ',Total')}>Total</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
