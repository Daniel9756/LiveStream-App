import React, { Fragment, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../Components/ErrorMessage/errorMessage';
import CustomTextInput from '../../Components/TextInput';
import CustomButton from '../../Components/Button';
import CustomTitleText from '../../Components/Title';
import CustomLabelText from '../../Components/Label';

import { Creators as AuthCreators } from '../../services/redux/auth/actions';
import { Creators as UserCreators } from '../../services/redux/user/actions';

import './style.css';

const Login = (props) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/profile' } };
    
    

    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
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
        props.loginUser(values)
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
              Hall of endless <br /> possibility
            </p>
          </div>
          <div className='login_form'>
            <Link to='#' className='_bck'>
              Back
            </Link>
            <CustomTitleText
              text="Log In"
              size="md"
              style={{textAlign: 'center',marginTop: 32}}
            />
            <div className="linkBox" style={{marginTop: 40, marginBottom: 60}}>
              <Link to='/signup' className='_login-acc'>
                Create an Account
              </Link>
              
            </div>

            <form className='_form-child' onSubmit={formik.handleSubmit}>
            <div className='label-container'>
                {
                  props.error && 
                  <div className='_labell' style={{textAlign: "center"}}>
                    <ErrorMessage errorValue={props.error[0].msg}/>
                  </div>
                }
                
                <div className='_labell'>
                 <CustomLabelText forlabel="email" text="Email"/>
                 <CustomTextInput
                    type='email'
                    name='email'
                    placeholder='Enter Email Address'
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
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                 />
                </div>
                <span className='_icon'>
                  {' '}
                  <i className='fa fa-eye-slash'></i>
                </span>
                  <ErrorMessage errorValue={formik.errors.password}/>
              </div>
              <CustomButton 
              text="Login In"
                  type="submit"
                  value="Log In"  
                  style={{ width: '90%', marginLeft: 14,padding: 15 }}  
              />
              <div className='login_link'>
                <div className='logged-in_box'>
                  <input type='radio' name='' className='_login-radio' />
                  <Link to='#' className='logged-in'>
                    Keep me logged in
                  </Link>
                </div>
                <div className='fgot-box'>
                  <Link to='#' className='fgot'>
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.protoTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => {
      dispatch(AuthCreators.loginRequest(data))
    },
    getUser: () => {
      dispatch(UserCreators.getUserDetails())
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error_message,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);