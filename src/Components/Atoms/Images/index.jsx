import React from 'react'

export const Images = ({ name, className, src, alt }) => {
    if (name === "image") {
        return <img src={src} className={className} alt={alt} />
    }
}
