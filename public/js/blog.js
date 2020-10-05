/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// export const saveBlog = async (title, blog, author) => {
export const saveBlog = async (data) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/blogs',
      data
      // data: {
      //   title, 
      //   blog, 
      //   author,
      // }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Blog Posted Successfully');
      // window.setTimeout(() => {
      //   location.assign('/');
      // }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const saveSubscription = async(email) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/subscribe',
      data: {
        email
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'You have subscribed to our newsletter');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
}

export const saveContact = async (firstName, lastName, email, phone, message) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/contact',
      data: {
        firstName,
        lastName,
        email,
        phone,
        message
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Message Sent Successfully');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
