import { useFormik } from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      todoName: '',
      todoDescription: '',
      author: ''
    }
  })
  console.log(formik.values)

  return (
    <div className="container-fluid">
      <h1>React Formik Example</h1>
      <form className='form'>
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
          />
        </div>
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
          />
        </div>
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
          />
        </div>
        <div className="row mt-3">
          <button type='submit' className='btn btn-primary col-md-1 m-3'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
