import React from 'react'
import './css/formInput.css'
function FormInput(props) {
  return (
    <>
        <div className='form-input'>
            {/* <label htmlFor="">Label</label> */}
            <input name={props.name} placeholder={props.placeholder}/>
        </div>
    </>
  )
}

export default FormInput