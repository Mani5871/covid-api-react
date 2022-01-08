import React from 'react'
import Country from './Country';
import {Link} from 'react-router-dom';

export default function Home(props) {

    async function getCountries(e) {
        document.getElementsByTagName('h1')[0].style.display = 'none';
        e.preventDefault();
        let url = 'https://api.covid19api.com/summary'
        const response = await fetch(url);
        const json = await response.json();

        let countries = document.getElementById('countries');
        let country_list = json.Countries;

        country_list.forEach(country => {console.log(country.Country);})
    }

    return (
        <>
            <div className="container h1-container text-center">
                <Link className="anchor" id="country_list" to="/countries" style={props.h1Style}><h1>Get Countries Names</h1></Link>
            </div>
        </>
    )
}
