import React from 'react'
import './Input.css'

interface PropsInput {
    setText: React.Dispatch<React.SetStateAction<string>>
}

function Input (props: PropsInput){
    return <input type="text" id="pesq" onChange={(e: React.FormEvent<HTMLInputElement>) => props.setText(e.currentTarget.value)} />
}

export default Input
