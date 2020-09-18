import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const FormBox = () => (
  <Tabs>
    <TabList>
      <Tab>Log In</Tab>
      <Tab>Register</Tab>
    </TabList>

    <TabPanel>
      <LoginForm/>
    </TabPanel>
    <TabPanel>
      <RegisterForm/>
      
    </TabPanel>
  </Tabs>
);

export default FormBox;