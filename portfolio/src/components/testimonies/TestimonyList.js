import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Layout from '../Layout/Layout';

import './TestimonyList.css'

//import './newList.css'



function TestimonyList() {

  const navigate = useNavigate();

  const [testimonies, setTestimonies] = useState([]);




  function goToEdit(id) {

    navigate(`/add-edit-testimonies/${id}`);

  }




  function deleteTestimony(email) {

    axios

      .delete(`http://localhost:3000/testimonies/${email}`)

      .then(() => getTestimonies())

      .catch((err) => console.log('Error', err));

  }




  function getTestimonies() {

    axios

      .get('http://localhost:3000/testimonies')

      .then((res) => setTestimonies(res.data.data))

      .catch((err) => console.log('Error', err));

  }




  useEffect(() => {

    getTestimonies();

  }, []);




  
  return (
    <Layout>
      <div className="testimony-list-container">
        <h1 className="testimony-title">Testimony List</h1>
        <div className='testimony-description'>
        <p>
          On this page, you will find a list of testimonies from people I collaborated with.
        </p>
        <p>
        Feel free to leave a testimony  🚀
        </p>
        </div>
        <div className="table-container">
      <table className="testimony-table"> 
        {/*<table className="container">*/}
            <thead>
              <tr>
                <th>Email</th>
                <th>Full Name</th>
                <th>Company Name</th>
                <th>Testimony</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonies.map((testimony) => (
                <tr key={testimony.email}>
                  <td>{testimony.email}</td>
                  <td>{testimony.fullName}</td>
                  <td>{testimony.companyName}</td>
                  <td>{testimony.testimony}</td>
                  <td>
                    <div  className='button-container' >
                    <button className="btn edit-btn" onClick={() => goToEdit(testimony.email)}>
                      Edit
                    </button>{' '}
                    <button
                      className="btn delete-btn"
                      onClick={() => deleteTestimony(testimony.email)}
                      disabled={testimonies.length < 2}
                    >
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

         
        </div>
        <button className="btn add-testimony-btn" onClick={() => navigate('/add-edit-testimonies')}>
          Add a Testimony
        </button>
      
      </div>
    </Layout>
  );
}




export default TestimonyList;