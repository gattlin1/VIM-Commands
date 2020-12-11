import React from 'react'
import './Search.scss'

export default function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
        </div>
    )
}
