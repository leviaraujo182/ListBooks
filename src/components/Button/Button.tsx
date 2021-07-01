import React from 'react'
import './Button.css'
import SearchIcon from './../../assets/img/search.png'


interface ButtonProps {
    onclick: () => void
}

function Button(props: ButtonProps){
    return <button onClick={props.onclick}><img src={SearchIcon} width="40" height="40" alt="Pesquisar"/></button>
}

export default Button