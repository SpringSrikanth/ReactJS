import { ErrorMessage, Field } from 'formik'
import React from 'react'
import CustomErrorMessage from '../CustomErrorMessage';

function RadioButtonControl(props) {
  const {label, name, options, ...rest} = props;
  return (
    <div className='row mt-3' style={{display:"flex",flexDirection:"column"}}>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {({field})=>{
                return options.map(option =>{
                    return (
                        <div className="form-check" key={option.key}>
                            <input
                                {...field}
                                className="form-check-input" 
                                type="radio"
                                id={option.value}
                                value={option.value}
                                checked={field.value === option.value}
                            /> 
                            <label className="form-check-label" htmlFor={option.value}>{option.key}</label>
                        </div>
                    )
                })
            }}
        </Field>
        <ErrorMessage name={name} component={CustomErrorMessage} />
    </div>
  )
}

export default RadioButtonControl