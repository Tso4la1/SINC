import React from 'react'

export const Texts = ({ name, text, className }) => {
    if (name === "paragraph") {
        return <p className={className}>{text}</p>
    }

    if (name === "Header1") {
        return <h1 className={className}>{text}</h1>
    }
    if (name === "Header2") {
        return <h2 className={className}>{text}</h2>
    }
}
