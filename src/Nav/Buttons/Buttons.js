import React from 'react'

const Buttons = props => {
  return (
    <button className={props.btnClassName} id="left-btn-container">
      <span className="left-btn-text">
        <img className={props.imgClassName} src={props.src} alt={props.alt} />
      </span>
    </button>
  )
}

export default Buttons
