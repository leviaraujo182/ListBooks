import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchIcon from './../../assets/img/search.png'


interface ButtonProps {
    onclick: () => void
}

function Button(props: ButtonProps){
    return <button onClick={props.onclick}><img src={SearchIcon} width="40" height="40" /></button>
}

export default Button