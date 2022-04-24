import { useEffect, useState } from "react";
import Api from "../Axios/Api";
import { useNavigate, useParams } from "react-router-dom";
const UpdateBlog = () => {
    const {id} = useParams();
    const [blog,setBlog] =useState(null)
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [featureImageUri,setFeatureImageUri]=useState("");
    const navigate =useNavigate();

    useEffect(()=>{
        Api.get(`blogs/${id}`).then(res=> res.data).then(data=>{
            setBlog(data.blog);
            setTitle(data.blog.title);
            setDescription(data.blog.description);
            setFeatureImageUri(data.blog.featureImageUri)

        }).catch(error=>{
            console.log(error.message)
        })
    },[])

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const blog={
            title,
            description,
            featureImageUri
        }

        Api.put(`blogs/${id}`,blog).then(res=>{
            console.log(res);
            navigate('/blogs')
        }).catch(error=>console.error(error.message));
    }

    const handleFormReset=(e)=>{
        setTitle(blog.title);
        setDescription(blog.description);
        setFeatureImageUri(blog.featureImageUri)
    }
    return ( 
        <form className="form" onSubmit={handleFormSubmit}>
            <h1>Update Blog</h1>
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
                <button type="submit" className="btn btn-primary m-3 col-md-1">Update</button>
                <button type="button" className="btn btn-light m-3 col-md-1" onClick={handleFormReset}>Reset</button>
            </div>
        </form> 
    );
}
 
export default UpdateBlog;