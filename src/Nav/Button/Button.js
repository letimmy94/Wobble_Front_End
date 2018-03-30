import React from 'react'

const Button = props => {
  return (
    <button className={props.btnClass} id="left-btn-container" onClick={props.updateRating}>
      <span className="left-btn-text">
        <img className={props.imgClass} src={props.icon} alt={props.alt} />
      </span>
    </button>
  )
}

export default Button
