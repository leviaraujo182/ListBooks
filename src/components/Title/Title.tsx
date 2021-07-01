import React from 'react'
import './Title.css'

interface PropsTitle {
    text: string
}

function Title(props: PropsTitle){
    return (
        <div className="title">
            <label className="txt_title">{props.text}</label>
        </div>
    )
}

export default Title