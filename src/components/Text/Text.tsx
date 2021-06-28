import react from 'react'

interface TextProps {
    title: string
}

function Text (props: TextProps){
    return <label>{props.title}</label>
}

export default Text