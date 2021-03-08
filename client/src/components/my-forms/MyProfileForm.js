import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createProfile, getCurrentProfile } from '../actions/profile';
// import { createStore } from '../actions/createStore';
const initialState = {
  contactnumber: '',
  contactemail: '',
  address: '',
  whatsapp: '',
  facebook: '',
  instagram: '',
  youtube: '',
};
const MyProfileForm = ({ createProfile, getCurrentProfile, history }) => {
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const [formData, setFormData] = useState(initialState);
  //   const dispatch = useDispatch();
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    contactnumber,
    contactemail,
    address,
    whatsapp,
    facebook,
    instagram,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <small> These information are required </small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Contact Number'
            name='contactnumber'
            value={contactnumber}
            onChange={onChange}
          />
          <small className='form-text'>
            Add your phone number for people to contact you with
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Contact Email'
            name='contactemail'
            value={contactemail}
            onChange={onChange}
          />
          <small className='form-text'>
            Add your contact email for people to contact you with
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={address}
            onChange={onChange}
          />
          <small className='form-text'>Home Address</small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-whatsapp fa-2x' />
              <input
                type='text'
                placeholder='Whatsapp'
                name='whatsapp'
                value={whatsapp}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        {profile == null ? (
          <Link className='btn btn-light my-1' to='/home'>
            Go Back
          </Link>
        ) : (
          <Link className='btn btn-light my-1' to='/myprofile'>
            Go Back
          </Link>
        )}
        ;
      </form>
    </Fragment>
  );
};

MyProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired
};

//   const mapStateToProps = state => ({
//     profile: state.profile
//   });

export default connect(null, { createProfile, getCurrentProfile })(
  MyProfileForm
);
