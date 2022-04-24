import { useState } from "react";
import Api from "../Axios/Api";
import { useNavigate } from "react-router-dom";
const NewBlog = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [featureImageUri,setFeatureImageUri]=useState("");
    const navigate =useNavigate();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const blog={
            title,
            description,
            featureImageUri,
            comments:[],
            categories:[],
            tags:[]
        }

        Api.post('blogs',blog).then(res=>{
            console.log(res);
            setTitle('');
            setDescription('');
            setFeatureImageUri('')
            navigate('/blogs')
        }).catch(error=>console.error(error.message));
    }

    const handleFormReset=(e)=>{
        setTitle('');
        setDescription('');
        setFeatureImageUri('')
    }
    return ( 
        <form className="form" onSubmit={handleFormSubmit}>
            <h1>Create Blog</h1>
            <div className="row mt-3">
                <label
                    className="label col-md-2"
                    htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="col-md-6 form-control form-control-sm"
                    placeholder="Enter Title"
                    value={title}
                    style={{ width: "50%" }}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className="row mt-3">
                <label
                    className="label col-md-2"
                    htmlFor="featureImageUri">
                    Image Uri
                </label>
                <input
                    type="text"
                    id="featureImageUri"
                    className="col-md-6 form-control form-control-sm"
                    placeholder="Enter Image Url"
                    value={featureImageUri}
                    style={{ width: "50%" }}
                    onChange={(e) => setFeatureImageUri(e.target.value)} 
                />
            </div>
            <div className="row mt-3">
                <label
                    className="label col-md-2"
                    htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    className="col-md-6 form-control form-control-sm"
                    placeholder="Enter Description"
                    value={description}
                    rows="5"
                    cols="10"
                    style={{ width: "50%" }}
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div className="row">
                <button type="submit" className="btn btn-primary m-3 col-md-1">Submit</button>
                <button type="button" className="btn btn-light m-3 col-md-1" onClick={handleFormReset}>Reset</button>
            </div>
        </form> 
    );
}
 
export default NewBlog;