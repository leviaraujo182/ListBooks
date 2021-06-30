import react from 'react'
import './Text.css'

interface TextProps {
    title: string
}

function Text (props: TextProps){
    return (
        <div className="text">
            <label className="title">{props.title}</label>    
        </div>
    )
}

export default Text