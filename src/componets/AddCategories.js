import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ({setcategories}) => {


    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSummit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length>2) {
            setcategories(cats =>([...cats, inputValue]));
            setinputValue('')    ;
        }

        
    }

    return (
     
            <form onSubmit = { handleSummit }>
                <input
                    type="text"
                    value= { inputValue }
                    onChange={ (e)=>{
                        handleInputChange(e);
                    }}
                />s
            </form>
       
    )
}


AddCategories.propTypes = {
    setcategories: PropTypes.func.isRequired
}