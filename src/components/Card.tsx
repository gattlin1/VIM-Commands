import React from 'react'
import './Card.scss'

export default function Card(props: any) {
    return (
        <div className="Card">
            <h3>{props.command}</h3>
            <img src="{props.example}" alt="" />
            <p>{props.description}</p>
        </div>
    )
}
