import React from 'react'

export const Input = ({ type, placeholder, className }) => {
    return (
        <form>
            <input type={type} placeholder={placeholder} className={className} />
        </form>
    )
}
