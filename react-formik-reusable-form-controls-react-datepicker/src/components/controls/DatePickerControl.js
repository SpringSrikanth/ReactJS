import { ErrorMessage, Field } from 'formik';
import React from 'react'
import CustomErrorMessage from '../CustomErrorMessage';
import DataView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerControl(props) {
    const {label,name, ...rest} =props;
  return (
    <div className='row mt-3'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({form,field})=>
                {
                    const {setFieldValue} = form;
                    const {value} =field
                    return(
                        <DataView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={(val)=>setFieldValue(name,val)}
                        />
                    )
                }
            }
        </Field>
        <ErrorMessage name={name} component={CustomErrorMessage} />
    </div>
  )
}

export default DatePickerControl