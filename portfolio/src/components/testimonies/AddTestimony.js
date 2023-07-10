import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import Layout from '../Layout/Layout';

import './AddTestimony.css'

  
function AddTestimony() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [state, setState] = useState({

    fullName: '',

    companyName: '',

    email: '',

    testimony: '',

  });




  const [errors, setErrors] = useState({

    fullName: '',

    companyName: '',

    email: '',

    testimony: '',

  });




  useEffect(() => {

    if (id) {

      axios

        .get(`http://localhost:3000/testimonies/${id}`)

        .then((res) => setState(res.data.data))

        .catch((err) => console.log('Error', err));

    }

  }, [id]);




  function handleChange(event) {

    const { name, value } = event.target;

    setState((previousState) => ({ ...previousState, [name]: value }));

    setErrors((previousErrors) => ({ ...previousErrors, [name]: '' }));

  }




  function fieldHasError(field) {

    return errors[field] && errors[field] !== '';

  }




  function isFormValid() {
    let isValid = true;

    const fullNameRegex = /^[a-zA-Z\s'.,-]*$/;
    const companyNameRegex = /^.+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const testimonyRegex = /^.+$/;

    let newErrors = {
      fullName: '',
      companyName: '',
      email: '',
      testimony: '',
    };

    function validateField(field, regex, minLength) {
      if (state[field].trim() === '') {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        isValid = false;
      } else if (!regex.test(state[field])) {
        newErrors[field] = `Invalid ${field}`;
        isValid = false;
      } else if (state[field].trim().length < minLength) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${minLength} characters long`;
        isValid = false;
      }
    }

    switch (true) {
      case state.fullName.trim() === '':
      case !fullNameRegex.test(state.fullName):
      case state.fullName.trim().length < 5:
        validateField('fullName', fullNameRegex, 5);
        break;
      default:
        break;
    }

    switch (true) {
      case state.companyName.trim() === '':
      case !companyNameRegex.test(state.companyName):
      case state.companyName.trim().length < 1:
        validateField('companyName', companyNameRegex, 5);
        break;
      default:
        break;
    }

    switch (true) {
      case state.email.trim() === '':
      case !emailRegex.test(state.email):
        validateField('email', emailRegex);
        break;
      default:
        break;
    }

    switch (true) {
      case state.testimony.trim() === '':
      case state.testimony.trim().length < 10:
        validateField('testimony', testimonyRegex, 10);
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return isValid;
  }

  function submit(event) {

    event.preventDefault();




    if (isFormValid()) {

      if (id) {

        axios

          .put(`http://localhost:3000/testimonies/${id}`, state)

          .then(() => navigate('/testimonies'))

          .catch((err) => {

            if (err.response && err.response.data && err.response.data.errors) {

              const errors = {};

              err.response.data.errors.forEach((error) => {

                errors[error.key] = error.message;

              });

              setErrors(errors);

            }

            console.log('Error updating testimony', err);

          });

      } else {

        axios

          .post('http://localhost:3000/testimonies', state)

          .then(() => navigate('/testimonies'))

          .catch((err) => {

            if (err.response && err.response.data && err.response.data.errors) {

              const errors = {};

              err.response.data.errors.forEach((error) => {

                errors[error.key] = error.message;

              });

              setErrors(errors);

            }

            console.log('Error adding testimony', err);

          });

    }

    }

  }




  
  return (
    <Layout>
      <div className="testimony-list-container"> 
        <div className="card mt-5">
          <h2 className="card-title">{id ? 'Edit Testimony' : 'Add a Testimony'}</h2>
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className={`form-control ${fieldHasError('fullName') && 'is-invalid'}`}
                  value={state.fullName}
                  onChange={handleChange}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter the full name"
                />
                {fieldHasError('fullName') && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  className={`form-control ${fieldHasError('companyName') && 'is-invalid'}`}
                  value={state.companyName}
                  onChange={handleChange}
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Enter the company name"
                />
                {fieldHasError('companyName') && <div className="invalid-feedback">{errors.companyName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className={`form-control ${fieldHasError('email') && 'is-invalid'}`}
                  value={state.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter the email"
                />
                {fieldHasError('email') && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="testimony">
                  Testimony
                </label>
                <textarea
                  className={`form-control ${fieldHasError('testimony') && 'is-invalid'}`}
                  value={state.testimony}
                  onChange={handleChange}
                  name="testimony"
                  id="testimony"
                  rows="4"
                  placeholder="Enter the testimony"
                />
                {fieldHasError('testimony') && <div className="invalid-feedback">{errors.testimony}</div>}
              </div>
              <button className="btn-submit" type="submit">
                {id ? 'Edit' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );

}




export default AddTestimony;