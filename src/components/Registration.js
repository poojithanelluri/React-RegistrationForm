import React from 'react'
import { useState } from 'react'
export default function Registration() {
  const [title,setTitle]=useState('')
  const [id,setId]=useState('')
  const [stream,setStream]=useState('')
  const [experience,setExperience]=useState('')
  const [dob,setDob]=useState('')
  const [address,setAddress]=useState('')
  const [error,setError]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const student={title,id,stream,experience,dob,address}
    const response=await fetch('/api/students',{
      method:'POST',
      body:JSON.stringify(student),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json=await response.json()
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      setTitle('')
      setId('')
      setStream('')
      setExperience('')
      setDob('')
      setAddress('')
      console.log('new student addded',json)
    }

  }
  return (
    <div>
      <div className="auth-wrapper">
       <div className="auth-inner">
       <form className="create" onSubmit={handleSubmit}>
        <h3>Student Form</h3>

        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Full name"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-3">
          <label>ID</label>
          <input type="text" name="id" className="form-control" placeholder="Enter ID"
            onChange={(e)=>setId(e.target.value)}
            value={id}
          />
         
        </div>

        <div className="mb-3">
          <label>Stream</label>
          <input
            type="text"
            name="stream"
            className="form-control"
            placeholder="Enter Stream"
            onChange={(e)=>setStream(e.target.value)}
            value={stream}
          />
        </div>

        <div className="mb-3">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            className="form-control"
            placeholder="Enter Experience"
            onChange={(e)=>setExperience(e.target.value)}
            value={experience}
          />
        </div>

        <div className="mb-3">
          <label>Date Of Birth</label>
          <input
            type="Date"
            name="dob"
            className="form-control"
            placeholder="Enter Date Of Birth "
            onChange={(e)=>setDob(e.target.value)}
            value={dob}
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea name="address" id="address" cols="30" rows="5"  className="form-control"
           onChange={(e)=>setAddress(e.target.value)}
           value={address}
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
        {error && <div className="error">{error}</div>}
    
      </form>
</div>
    </div>
    </div>
  )
}
