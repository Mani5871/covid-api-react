import {useEffect} from "react"
import React, { Component } from 'react'
import Country from './Country';

export default class CountryList extends Component {

    constructor()
    {
        super();
        this.state = {
            country_list: []
        }
    }

    async componentDidMount() {
        let url = 'https://api.covid19api.com/summary'
        const response = await fetch(url);
        const json = await response.json();
        this.setState({country_list: json.Countries});        
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.country_list.map(country => {
                        return(
                            <div className="col-md-4">
                                <Country cardStyle = {this.props.cardStyle} mode={this.props.mode} country={country.Country} key={country.Country} />
                            </div>
                        )
                    })}   
                    
                </div>
            </div>
        )
    }
}
