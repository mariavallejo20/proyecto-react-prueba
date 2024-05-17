import React from 'react'
// @ts-ignore
import Star_Wars_Logo from '../img/Star_Wars_Logo.png'
import { Link } from 'react-router-dom'

// declare module "*.png" {
//     const value: any;
//     export = value;
// }
  

const Start: React.FC = () =>
{
    return(
        <header className="App-header">
            <h1 className="title">Stars Wars</h1>
            
            <img src={Star_Wars_Logo} alt="Start Wars" className="img-home" />
            <Link to="/films" className="btn-search">Entrar</Link> 
        </header>
    )
}

export {Start}