import React from 'react'

export default function Home(props) {
    return (
        <>
            <div className="container h1-container text-center">
                <a className="anchor" id="country_list" href="/" style={props.h1Style}><h1>Get Countries Names</h1></a>
            </div>
        </>
    )
}
