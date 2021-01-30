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
            setcategories(cats =>([ inputValue, ...cats]));
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
                />
            </form>
       
    )
}


AddCategories.propTypes = {
    setcategories: PropTypes.func.isRequired
}