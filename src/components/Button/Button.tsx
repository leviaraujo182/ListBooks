import React from 'react'
import './Button.css'
import SearchIcon from './../../assets/img/search.png'

interface ButtonProps {
    onclick: () => void
}

function Button(props: ButtonProps){
    return <button onClick={props.onclick}><img src={SearchIcon} width={'90%'} /></button>
}

export default Button