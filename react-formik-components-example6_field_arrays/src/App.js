import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
import ErrorMsgComponent from "./Components/ErrorMsgComponent";

function App() {
  const initialValues = {
    firstName:'',
    middleName:'',
    secondName:'',
    bio:'',
    address:'',
    social: {
      facebook:'',
      instagram:''
    },
    hobbies:['Playing Cricket' , 'Listening music']
  }

  const onSubmit = values =>{
    console.log('submit',values)
  }

  const validationSchema = Yup.object({
    firstName : Yup.string().required('Required First Name'),
    secondName : Yup.string().required('Required Second Name'),
    address : Yup.string().required('Required Address')
  })

  return (
    <div className="container-fluid">
      <h1>Sign Up Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
      >
        <Form className="form">
          <div className="row mt-3">
            <label htmlFor="firstName" className="label col-md-2">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          {/* <ErrorMessage name="firstName" component="div" className="text-danger" /> */}
          {/* <ErrorMessage name="firstName" component={ErrorMsgComponent} className="text-danger" /> */}

          <ErrorMessage name="firstName">
            {(errorMessage) => {
              return (<ErrorMsgComponent errorMessage={errorMessage} />)
            }}
          </ErrorMessage>
          <div className="row mt-3">
            <label htmlFor="middleName" className="label col-md-2">Middle Name</label>
            <Field
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Enter Middle Name"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          <ErrorMessage name="middleName" />

          <div className="row mt-3">
            <label htmlFor="secondName" className="label col-md-2">Second Name</label>
            <Field
              type="text"
              id="secondName"
              name="secondName"
              placeholder="Enter Second Name"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          <ErrorMessage name="secondName">
            {(errorMessage) => {
              return (<ErrorMsgComponent errorMessage={errorMessage} />)
            }}
          </ErrorMessage>

          <div className="row mt-3">
            <label htmlFor="bio" className="label col-md-2">Bio</label>
            <Field
              as="textarea"
             // or component="textarea" but component is deprecated
              id="bio"
              name="bio"
              placeholder="Enter Bio"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="address" className="label col-md-2">Address</label>
            <Field name="address">
              {
                (props)=>{
                  const {meta,field } = props;
                  return (
                    <>
                      <input 
                        type="text" 
                        className="form-control form-contorl-sm col-md-4" 
                        placeholder="Enter Address" 
                        {...field} 
                      />
                      {
                        meta.touched && meta.error ? 
                          <div className="text-danger" style={{
                            position: "relative",
                            top: "38px",
                            right: "33.5%"
                          }}>
                            {meta.error}
                          </div> 
                          : null
                      }
                    </>
                  )
                }
              }
            </Field>
          </div>
          <h4>Social Profiles</h4>
          <div className="row mt-3">
            <label htmlFor="facebook" className="label col-md-2">Facebook</label>
            <Field
              id="facebook"
              name="social.facebook"
              placeholder="Enter Facebook Url"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="instagram" className="label col-md-2">Instagram</label>
            <Field
              id="instagram"
              name="social.instagram"
              placeholder="Enter Instagram Url"
              className="form-control form-control-sm col-md-4"
            />
          </div>

          <h4>Hobbies</h4>

          <div className="row mt-3">
            <label htmlFor="hobby1" className="label col-md-2">Hobby #1</label>
            <Field
              id="hobby1"
              name="hobbies[0]"
              placeholder="Enter Hobby 1"
              className="form-control form-control-sm col-md-4"
            />
          </div>

          <div className="row mt-3">
            <label htmlFor="hobby2" className="label col-md-2">Hobby #2</label>
            <Field
              id="hobby2"
              name="hobbies[1]"
              placeholder="Enter Hobby 2"
              className="form-control form-control-sm col-md-4"
            />
          </div>
          <div className="row mt-3" >
            <button type="submit" className="ml-3 col-md-1 btn btn-primary">Submit Form</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
