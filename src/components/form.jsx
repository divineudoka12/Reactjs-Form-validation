import React, { useState } from 'react'

const form = (props) => {
    const [Focused, setFocused] = useState(false)

    const {label, errormessage, id, onchange, ...inputProps} = props;

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="form">
            <label>{label}</label>
            <input {...inputProps} onChange={onchange} onBlur={handleFocus} Focused={Focused.toString()} 
            onFocus={() => inputProps.name === "confirmpassword" && setFocused(true)}/>
            <span>{errormessage}</span>
        </div>
    )
}

export default form
