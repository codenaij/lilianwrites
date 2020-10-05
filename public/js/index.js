/* eslint-disable */
import '@babel/polyfill';
import { login, logout, register } from './login';
import { updateSettings } from './updateSettings';
import { saveBlog, saveSubscription, saveContact } from './blog';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav-logoutbtn');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const adminPostBlogForm = document.querySelector('.form-admin-blog');
const subscribeEmail = document.querySelector('.subscribe');
const contactForm = document.querySelector('.contact-form');
const registerForm = document.querySelector('.register');

// DELEGATION
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;

    register(name, email, password, passwordConfirm);
  })
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (adminPostBlogForm) {
  adminPostBlogForm.addEventListener('submit', e => {
    e.preventDefault();

    // const title = document.getElementById('blogtitle').value;
    // const blog = document.getElementById('editor').value;
    // const author = document.getElementById('blogauthor').value;
    // saveBlog(title, blog, author);

    const data = new FormData();
    data.append('title', document.getElementById('blogtitle').value);
    data.append('blog', document.getElementById('blogblog').value);
    data.append('author', document.getElementById('blogauthor').value);
    // data.append('photo', document.getElementById('photo').files[0]);
    saveBlog(data);
  });
}

if (subscribeEmail) {
  subscribeEmail.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('subscribe-email').value;

    saveSubscription(email);
    document.getElementById('subscribe-email').value = '';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = document.getElementById('#first-name').value;
    const lastName = document.getElementById('#last-name').value;
    const email = document.getElementById('#contact-email').value;
    const phone = document.getElementById('#contact-phone').value;
    const message = document.getElementById('#message').value;

    saveContact(firstName, lastName, email, phone, message);

    document.getElementById('#first-name').value = '';
    document.getElementById('#last-name').value = '';
    document.getElementById('#contact-email').value = '';
    document.getElementById('#contact-phone').value = '';
    document.getElementById('#message').value = '';
  });
}
