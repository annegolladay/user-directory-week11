import React, {Component} from "react"

const Buttons = (props) => {
    const {person, handleNext, handlePrevious} = props
    return (
        <div className="buttons">
            <button className="buttonsection left" onClick={event => handlePrevious(event)}>{"< "}Previous</button>
            <button className="buttonsection right" onClick={event => handleNext(event)}>Next{" >"}</button>
        </div>
    )
}

export default Buttons