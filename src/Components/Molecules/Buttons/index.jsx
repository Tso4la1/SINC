import React from 'react'

export const Buttons = ({ onClick, text, className }) => {
    return (
        <button onclick={onClick} className={className}>{text}</button>
    )
}
