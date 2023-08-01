import React, { useState } from 'react';

const SignUpForm = () => {
  // Initialize form state with an empty user object
  const [user, setUser] = useState({
    name: '',
    id: '',
    stream: '',
    experience: '',
    dob: '',
    address: ''
  });

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement your save logic here (e.g., send data to the server)
    console.log('User data to save:', user);
  };

  // Function to handle Edit button click
  const handleEditClick = () => {
    // Enable form fields for editing
    // (We can create a copy of the user state and update the readOnly property)
    setUser((prevUser) => ({
      ...prevUser,
      readOnly: false
    }));
  };

  // Function to handle Delete button click
  const handleDeleteClick = () => {
    // Implement your delete logic here
    console.log('User data to delete: Implement your delete logic here');
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form onSubmit={handleFormSubmit}>
          <h3>Sign Up</h3>

          <div className='mb-3'>
            <label>Full Name</label>
            <input
              type='text'
              name='name'
              value={user.name}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Enter Full name'
              readOnly={user.readOnly}
            />
          </div>

          {/* Other form fields (ID, Stream, Experience, Date of Birth, Address) */}

          <div className='d-grid'>
            <button type='button' className='btn btn-primary' onClick={handleEditClick}>
              Edit
            </button>
          </div>

          <div className='d-grid'>
            <button type='button' className='btn btn-danger' onClick={handleDeleteClick}>
              Delete
            </button>
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-success'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
