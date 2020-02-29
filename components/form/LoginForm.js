import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from "../../atoms/input/TextField";

const LoginForm = () => {
  const formik = Formik({
    initialValues: { 
      username: "",
      email: "" 
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }), 
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <TextField
            label="Username"
            name="username"
            type="text"
            placeholder="DinaDino"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="diondina@gmail.com"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;