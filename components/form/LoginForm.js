import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from "../../atoms/input/TextField";
import Button from "../../atoms/input/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (  
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(7, 'Must be greater than 7 characters')
        .required('Required'),
    })} 
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSumbtting(false);
      }, 400);
    }}
  >
    {formik => (
      <Form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="diondina@gmail.com"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Button type="submit">Submit</Button>
      </Form>
    )}
    </Formik>
  );
};

export default LoginForm;