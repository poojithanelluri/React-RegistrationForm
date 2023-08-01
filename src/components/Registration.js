import React from 'react'
import { useState } from 'react'
export default function Registration() {
  const [form,setForm] = useState({});
 const handleForm=(e)=>{
    
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
      
 const handleSubmit=async(e)=>{
    e.preventDefault();
   const response=await fetch('http://localhost:8000/demo',{
      method:'POST',
      body : JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
   const data=await response.json();
    console.log(data); 
  }
  return (
    <div>
      <div className="auth-wrapper">
       <div className="auth-inner">
       <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Full name"
            onChange={handleForm}
          />
        </div>

        <div className="mb-3">
          <label>ID</label>
          <input type="text" name="id" className="form-control" placeholder="Enter ID"
           onChange={handleForm}
          />
         
        </div>

        <div className="mb-3">
          <label>Stream</label>
          <input
            type="text"
            name="stream"
            className="form-control"
            placeholder="Enter Stream"
            onChange={handleForm}
          />
        </div>

        <div className="mb-3">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            className="form-control"
            placeholder="Enter Experience"
            onChange={handleForm}
          />
        </div>

        <div className="mb-3">
          <label>Date Of Birth</label>
          <input
            type="Date"
            name="dob"
            className="form-control"
            placeholder="Enter Date Of Birth "
            onChange={handleForm}
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea name="address" id="address" cols="30" rows="5"  className="form-control"
          onChange={handleForm}
          ></textarea>
          
        </div>

        <div className="d-grid">
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </div>
       
        <div className="d-grid">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
</div>
    </div>
    </div>
  )
}
