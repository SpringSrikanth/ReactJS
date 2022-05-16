import { useFormik } from 'formik';
import * as yup from 'yup';
import './App.css';

const initialValues= {
  todoName: '',
  todoDescription: '',
  author: ''
}

const onSubmit = values =>{
  console.log('onsubmit',values)
}

const validationSchema = yup.object({
  todoName : yup.string().required('Required Todo Name !!!'),
  todoDescription : yup.string().required('Required Todo Description !!!'),
  author : yup.string().required('Required Author Name !!!')
})

function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
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
            {...formik.getFieldProps('todoName')}
          />
        </div>
          { formik.touched.todoName && formik.errors.todoName ? <p className='text-danger mt-1' style={{marginLeft:"16%"}}>{formik.errors.todoName}</p> : null}
        <div className="row mt-3">
          <label htmlFor="todoDescription" className='label col-md-2'>Todo Description</label>
          <textarea
            rows="5"
            cols="15"
            className="form-control form-control-sm col-md-4"
            id="todoDescription"
            name="todoDescription"
            placeholder="Enter Todo Description"
            {...formik.getFieldProps('todoDescription')}

          />

        </div>
          { formik.touched.todoDescription && formik.errors.todoDescription ? <p className='text-danger mt-1' style={{marginLeft:"16%"}}>{formik.errors.todoDescription}</p> : null}
        <div className="row mt-3">
          <label htmlFor="author" className='label col-md-2'>Author</label>
          <input
            type="text"
            className="form-control form-control-sm col-md-4"
            id="author"
            name="author"
            placeholder="Enter Author Name"
            {...formik.getFieldProps('author')}

          />
        </div>
          { formik.touched.author && formik.errors.author ? <p className='text-danger mt-1' style={{marginLeft:"16%"}}>{formik.errors.author}</p> : null}
        <div className="row mt-3">
          <button type='submit' className='btn btn-primary col-md-1 m-3'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
