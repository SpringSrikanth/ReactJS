import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './controls/FormikControl'

function FormikContainer() {
  const initialValues = {
    fullName:'',
    bio:'',
    course:'',
    gender:'',
    languages:[],
    dob:''
  }

  const options =[
      { key:'Select Option', value:''},
      { key:'Java Full Stack', value:'Java Full Stack'},
      { key:'Mean Stack', value:'Mean Stack'},
      { key:'Mern Stack', value:'Mern Stack'},
      { key:'Data Science', value:'Data Science'}
  ]

  const genderOptions =[
    { key:'Male', value:'male'},
    { key:'Female', value:'female'},
    { key:'Other', value:'other'}
  ]

  const languageOptions =[
    { key:'Telugu', value:'telugu'},
    { key:'Hindi', value:'hindi'},
    { key:'English', value:'english'}
  ]

  const onSubmit = (values,onSubmitProps) =>{
      console.log(values,onSubmitProps)
  }

  const validationSchema = Yup.object({
      fullName : Yup.string().required('Required FirstName !!!'),
      bio : Yup.string().required('Required Bio !!!'),
      course : Yup.string().required('Required Course !!!'),
      gender : Yup.string().required('Required Gender !!!'),
      languages : Yup.array().min(1).required('Required Language !!!'),
      dob : Yup.string().required('Required Date !!!'),
  })

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        enableReinitialize={true}
    >
        {
            (formik)=>{
                return(
                    <Form className='form'>
                        <FormikControl
                            control="input"
                            type="text"
                            name="fullName"
                            label="Full Name"
                            placeholder="Enter Full Name"
                        />
                        <FormikControl
                            control="textarea"
                            name="bio"
                            label="Bio"
                            placeholder="Enter Bio"
                        />
                        <FormikControl
                            control="select"
                            name="course"
                            label="Select Course"
                            options={options}
                        />
                        <FormikControl
                            control="radio"
                            name="gender"
                            label="Select Gender"
                            options={genderOptions}
                        />
                        <FormikControl
                            control="checkbox"
                            name="languages"
                            label="Select Languages"
                            options={languageOptions}
                        />
                        <FormikControl
                            control="datepicker"
                            name="dob"
                            label="DOB"
                            options={languageOptions}
                        />
                        <div className='row mt-3'>
                            <button type='submit' className='btn btn-primary' style={{width:"150px"}}>Submit</button>
                            <button type='button' className='btn btn-danger ml-3' style={{width:"150px"}} onClick={()=> formik.resetForm()}>Reset</button>
                        </div>
                    </Form>
                )
            }
        }
    </Formik>
  )
}

export default FormikContainer