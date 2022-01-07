import React from 'react'
import {FaSun, FaMoon} from "react-icons/fa";
import {useEffect} from "react"

export default function Navbar(props) {

    useEffect(() => {
        document.getElementById('sun').style.display = 'none';
    }, [])
    

    const sunClicked = (e) => { 
        e.preventDefault();
        document.getElementById('sun').style.display = 'none';
        document.getElementById('moon').style.display = 'block';
        props.changeMode();
    }

    const moonClicked = (e) => {
        e.preventDefault();
        document.getElementById('moon').style.display = 'none';
        document.getElementById('sun').style.display = 'block';
        props.changeMode();
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">COVID - API</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            
                            
                        </ul>
                        <form className="d-flex">
                            <a onClick={sunClicked} href="#" id = "sun"> <FaSun></FaSun> </a>
                            <a href = "#" onClick={moonClicked} id = "moon"> <FaMoon/> </a>
                            
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
