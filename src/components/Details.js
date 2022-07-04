import React from 'react'
import { useEffect, useState, useRef } from "react"

export default function Details(props) {

    let country = localStorage.getItem('country');
    let status = localStorage.getItem('status');

    let [countryDetails, setCountryDetails] = useState([]);
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [date, setDate] = useState('');

    const startingDate = useRef(null);
    const endingDate = useRef(null);

    async function getCountries(e) {
        let url = 'https://api.covid19api.com/total/dayone/country/' + country;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        setCountryDetails(json);

        setStartDate(json[0].Date.substring(0, 10));
        setEndDate(json[json.length - 1].Date.substring(0, 10));
    }
    useEffect(() => {

        const script = document.createElement("script");
        script.src = './date.js';
        script.async = true;
        document.body.appendChild(script);

        getCountries();
    }, [])

    const sliderChanged = (e) => {
        let value = e.target.value;
        setDate(e.target.value)
        console.log(value);
        console.log(startDate);
    }


    return (
        <div>

            {/* <div className="container my-4">
                <hr />
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="md-form">
                            <input ref = {startingDate} placeholder="Selected starting date" type="text" id="startingDate" className="form-control datepicker" />
                            <label htmlFor="startingDate">start</label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="md-form">
                            <input ref = {endingDate} placeholder="Selected ending date" type="text" id="endingDate" className="form-control datepicker" />
                            <label htmlFor="endingDate">end</label>
                        </div>
                    </div>
                </div>
            </div> */}

            
            <table className={`table table-${props.mode} table-striped`}>
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">{status}</th>
                </tr>
                </thead>
                <tbody>
                {countryDetails.map(country => {
                    return(
                        <tr key = {country.Date}>
                            <td>{country.Date.substring(0, 10)}</td>
                            <td>{country[status]}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>


        </div>
    )
}
