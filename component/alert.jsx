
import React from 'react'

const Alert = ({text,color}) => {
    return (
        <div id='alert' class={`alert alert-${color}`} role="alert">
                {text}
        </div>
    )
}

export default Alert
