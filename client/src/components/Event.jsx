import React from 'react'
import '../css/Event.css'

const Event = (props) => {
    return (
        <article className='event-information'>
            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title || props.name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date}</p>
                </div>
            </div>
        </article>
    )
}

export default Event