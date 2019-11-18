import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import SignSide from './components/login/SignSide';
import SignUp from './components/signup/SignUp';
import PersonalInfoPage from './components/personalInfo/PersonalInfoPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth';

export default (
  <div className="container">
    <Route exact path="/" component={ HomePage } />
    <Route path="/signup" component={ SignUp } />
    <Route path="/login" component={ SignSide } />
    <Route path="/personalInfo" component={ PersonalInfoPage } />
    <Route path="/new-event" component={ requireAuth(NewEventPage) } />
  </div>
)
