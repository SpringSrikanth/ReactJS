import { ErrorMessage, Field } from 'formik'
import React from 'react'
import CustomErrorMessage from '../CustomErrorMessage'

function SelectControl(props) {
  const {label,name,options, ...rest} = props
  return (
    <div className='row mt-3'>
        <label htmlFor='label'>{label}</label>
        <Field 
            as="select" 
            className="custom-select custom-select-sm" 
            id={name} 
            name={name} 
            {...rest}
        >
            {
              options.map(option=>{
                  return(
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                  )
              })
            }
        </Field>
        <ErrorMessage name={name} component={CustomErrorMessage}/>
    </div>
  )
}

export default SelectControl