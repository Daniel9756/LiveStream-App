import React, { Fragment, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
//import { signup } from '../../actions/auth';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../Components/ErrorMessage/errorMessage';
import CustomTextInput from '../../Components/TextInput';
import CustomButton from '../../Components/Button';
import { Creators } from '../../services/redux/auth/actions';
import CustomTitleText from '../../Components/Title';
import CustomLabelText from '../../Components/Label';


import './style.css';

const Signup = (props) => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/profile' } };
  

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .label('Firstname')
        .required('Firstname is required'),
      lastname: Yup.string()
        .label('Lastname')
        .required('Lastname is required'),
      email: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup.string()
        .label('Password')
        .min(3, 'Password must be atleast 3 characters long')
        .required('Password is required'),
      }),
    onSubmit: values => {
      props.registerUser(values)
    },
  });

  if (props.isAuthenticated) {
    from ? history.replace(from) : history.replace('/profile');
  }

  return (
    <Fragment>
      <section>
        <div className='logo_box'>
          <div className='_box'>
            <img
              src={process.env.PUBLIC_URL + '../../assets/image/Group 4.svg'}
              alt='logo'
              className='logo'
            />
            <p className='_ending'>
              Hall of endless
              <br /> possibility
            </p>
          </div>
          <div className='_form'>
            <Link to='/' className='_bck'>
              Back
            </Link>
            <CustomTitleText
              text="Sign Up"
              size="md"
              style={{textAlign: 'center',marginTop: 21}}
            />
            <Link to='/' className='_acc'>
              Already have an Account
            </Link>
            <form className='_form-child' onSubmit={formik.handleSubmit}>
              <div className='label-container'>
                {
                  props.error && 
                  <div className='_labell'>
                    <ErrorMessage errorValue={props.error[0].msg}/>
                  </div>
                }
                <div className='_label'>
                  <div className='_first-box'>
                    <CustomLabelText forlabel= "firstname" text="First Name"/>
                    <br />
                    <CustomTextInput
                      type='text'
                      name='firstname'
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                      style={{width: "85%"}}
                  />
                    <ErrorMessage errorValue={formik.errors.firstname}/>
                  </div>
                  <div className='_last-box'>
                    <CustomLabelText forlabel= "lastname" text="Last Name"/>
                    <br />
                    <CustomTextInput
                      type='text'
                      name='lastname'
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                      style={{width: "85%",marginLeft: 0}}
                  />
                    <ErrorMessage errorValue={formik.errors.lastname}/>
                  </div>
                </div>
                <div className='_labell'>
                  <CustomLabelText forlabel="email" text="Email"/>
                  <CustomTextInput
                      type='text'
                      name='email'
                      onChange={formik.handleChange}
                      value={formik.values.email}
                  />
                    <ErrorMessage errorValue={formik.errors.email}/>
                </div>
                <div className='_labell'>
                  <CustomLabelText forlabel = "password" text="Password" />
                  <CustomTextInput
                      type='password'
                      name='password'
                      onChange={formik.handleChange}
                      value={formik.values.password}
                  />
                    <ErrorMessage errorValue={formik.errors.password}/>
                </div>
                <span className='icon'>
                  {' '}
                  <img
                    src={
                      process.env.PUBLIC_URL + '../../assets/image/eye-24px.svg'
                    }
                    alt='icon'
                  />
                </span>
                <CustomButton 
                text="Sign Up"
                    type="submit"
                    value="Sign Up"  
                    style={{ width: '90%', marginLeft: 14,padding: 15 }}  
                />
                <br></br>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Signup.protoTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: data => {
      dispatch(Creators.registerRequest(data))
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error_message,
});

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
