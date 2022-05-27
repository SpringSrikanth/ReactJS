import React from 'react'
import CheckBoxControl from './CheckBoxControl';
import DatePickerControl from './DatePickerControl';
import InputControl from './InputControl';
import RadioButtonControl from './RadioButtonControl';
import SelectControl from './SelectControl';
import TextareaControl from './TextareaControl';

function FormikControl(props) {
  const {control,...rest}=props
  switch (control) {
      case 'input':
          return <InputControl {...rest}/>
      case 'textarea':
          return <TextareaControl {...rest}/>
      case 'select':
          return <SelectControl {...rest}/>
      case 'radio':
          return <RadioButtonControl {...rest}/>
      case 'checkbox':
          return <CheckBoxControl {...rest}/>
      case 'datepicker':
          return <DatePickerControl {...rest}/>
      default:
          return null;
  }
}

export default FormikControl