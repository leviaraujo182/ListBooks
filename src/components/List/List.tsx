import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faLink } from '@fortawesome/free-solid-svg-icons'

interface PropsList {
    author: string
    title: string
    url: string
}

function List(props: PropsList){
    return (
        <div className="list">
            <div className="container">
                <dl>
                    <dt className="item_list"><FontAwesomeIcon icon={faUser}/> {props.author} </dt>
                    <dt className="item_list"><FontAwesomeIcon icon={faBook}/> {props.title}</dt>
                    <dt className="item_list"><FontAwesomeIcon icon={faLink}/> {props.url}</dt>
                </dl>
            </div>
        </div>
    )
}

export default List