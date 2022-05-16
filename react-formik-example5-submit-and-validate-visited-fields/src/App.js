import { useFormik } from 'formik';
import './App.css';

const initialValues= {
  todoName: '',
  todoDescription: '',
  author: ''
}

const onSubmit = values =>{
  console.log(values)
}

const validate = values =>{
  let errors = {}
  if(!values.todoName){
    errors.todoName = "Required Todo Name"
  }

  if(!values.todoDescription){
    errors.todoDescription = "Required Todo Description";
  }

  if(!values.author){
    errors.author = "Required Author Name";
  }

  return errors;
}

function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('Visited fields', formik.touched)

  return (
    <div className="container-fluid">
      <h1>React Formik Example</h1>
      <form className='form' onSubmit={formik.handleSubmit}>
        <h1>Create Todo</h1>
        <div className="row mt-3">
          <label htmlFor="todoName" className='label col-md-2'>Todo Name</label>
          <input
            type="text"
            className="form-control form-control-sm col-md-4"
            id="todoName"
            name="todoName"
            placeholder="Enter Todo Name"
            value={formik.values.todoName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          { formik.touched.todoName && formik.errors.todoName ? <p className='text-danger' style={{marginLeft:"16%"}}>{formik.errors.todoName}</p> : null}
        <div className="row mt-3">
          <label htmlFor="todoDescription" className='label col-md-2'>Todo Description</label>
          <textarea
            rows="5"
            cols="15"
            className="form-control form-control-sm col-md-4"
            id="todoDescription"
            name="todoDescription"
            placeholder="Enter Todo Description"
            value={formik.values.todoDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

        </div>
          { formik.touched.todoDescription && formik.errors.todoDescription ? <p className='text-danger' style={{marginLeft:"16%"}}>{formik.errors.todoDescription}</p> : null}
        <div className="row mt-3">
          <label htmlFor="author" className='label col-md-2'>Author</label>
          <input
            type="text"
            className="form-control form-control-sm col-md-4"
            id="author"
            name="author"
            placeholder="Enter Author Name"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          { formik.touched.author && formik.errors.author ? <p className='text-danger' style={{marginLeft:"16%"}}>{formik.errors.author}</p> : null}
        <div className="row mt-3">
          <button type='submit' className='btn btn-primary col-md-1 m-3'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
