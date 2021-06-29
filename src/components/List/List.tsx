import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faLink } from '@fortawesome/free-solid-svg-icons'


function List(){

    return (
        <div className="container">
            <dl>
                <dt className="item_list"><FontAwesomeIcon icon={faUser}/> Author: </dt>
                <dt className="item_list"><FontAwesomeIcon icon={faBook}/> Title: </dt>
                <dt className="item_list"><FontAwesomeIcon icon={faLink}/> Url: </dt>
            </dl>

        </div>
    )
}

export default List