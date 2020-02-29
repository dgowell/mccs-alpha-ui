import React, { useState } from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <MaterialTextField id={props.id} label={props.name} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default TextField;