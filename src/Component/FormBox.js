import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const FormBox = () => (
  <Tabs>
    <TabList>
      <Tab>Register</Tab>
      <Tab>Log In</Tab>
    </TabList>

    <TabPanel>
      <RegisterForm/>
    </TabPanel>
    <TabPanel>
      <LoginForm/>
    </TabPanel>
  </Tabs>
);

export default FormBox;