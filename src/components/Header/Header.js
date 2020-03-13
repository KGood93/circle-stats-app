import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/meetups'>
            {' '}
            Circle Time Stats
            </Link>
        </h1>
      </nav>
    )
  }
}