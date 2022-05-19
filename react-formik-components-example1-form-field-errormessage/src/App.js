import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"

function App() {
  const initialValues = {
    firstName:'',
    middleName:'',
    secondName:''
  }

  const onSubmit = values =>{
    console.log('submit',values)
  }

  const validationSchema = Yup.object({
    firstName : Yup.string().required('Required First Name'),
    secondName : Yup.string().required('Required Second Name')
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
          <ErrorMessage name="firstName" />

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
          <ErrorMessage name="secondName" />

          <div className="row mt-3" >
            <button type="submit" className="ml-3 col-md-1 btn btn-primary">Submit Form</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
