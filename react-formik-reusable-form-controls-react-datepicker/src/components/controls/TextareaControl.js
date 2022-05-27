import { ErrorMessage, Field } from 'formik'
import React from 'react'
import CustomErrorMessage from '../CustomErrorMessage'

function TextareaControl(props) {
  const {label,name,...rest} =props
  return (
    <div className='row mt-3'>
        <label htmlFor={name}>{label}</label>
        <Field
            className="form-control form-control-sm" 
            as="textarea"
            name={name}
            id={name}
            {...rest}
        />
        <ErrorMessage name={name} component={CustomErrorMessage}/>
    </div>
  )
}

export default TextareaControl