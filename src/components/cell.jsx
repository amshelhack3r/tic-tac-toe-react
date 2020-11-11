import React from 'react'

export default function Cell(props) {

    return <div onClick={props.click} className="cell"></div>
}